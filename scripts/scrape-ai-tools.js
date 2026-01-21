/**
 * AI Tools Scraper
 * Fetches trending AI tools from various sources and generates update suggestions
 * Run: node scripts/scrape-ai-tools.js
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Categories we track
const CATEGORIES = [
  'top-tools',
  'apps', 
  'video',
  'image',
  'audio',
  'coding',
  'agents',
  'productivity',
  'writing'
];

/**
 * Fetch JSON from URL
 */
function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'NestorAI-ContentBot/1.0',
        'Accept': 'application/json'
      }
    };
    
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve({ error: 'Failed to parse JSON', raw: data.substring(0, 500) });
        }
      });
    }).on('error', reject);
  });
}

/**
 * Fetch trending GitHub repos for AI tools
 */
async function fetchGitHubTrending() {
  console.log('📦 Fetching GitHub trending AI repos...');
  
  const queries = [
    'topic:ai+topic:tool',
    'topic:llm+topic:framework',
    'topic:chatgpt',
    'topic:generative-ai'
  ];
  
  const results = [];
  
  for (const query of queries) {
    try {
      const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=20`;
      const data = await fetchJSON(url);
      
      if (data.items) {
        for (const repo of data.items) {
          results.push({
            name: repo.name,
            url: repo.html_url,
            description: repo.description || '',
            stars: repo.stargazers_count,
            updated: repo.updated_at,
            source: 'github'
          });
        }
      }
      
      // Rate limiting
      await new Promise(r => setTimeout(r, 1000));
    } catch (e) {
      console.error(`  Error fetching ${query}:`, e.message);
    }
  }
  
  // Dedupe and sort by stars
  const unique = [...new Map(results.map(r => [r.url, r])).values()];
  return unique.sort((a, b) => b.stars - a.stars).slice(0, 50);
}

/**
 * Categorize a tool based on its description
 */
function categorize(tool) {
  const desc = (tool.description || '').toLowerCase();
  const name = (tool.name || '').toLowerCase();
  const text = `${name} ${desc}`;
  
  if (text.match(/video|veo|sora|runway|animate|motion/)) return 'video';
  if (text.match(/image|midjourney|dall-e|stable diffusion|flux|imagen/)) return 'image';
  if (text.match(/audio|voice|speech|music|sound|elevenlabs|suno/)) return 'audio';
  if (text.match(/code|coding|ide|copilot|cursor|developer|programming/)) return 'coding';
  if (text.match(/agent|autonomous|crew|autogen/)) return 'agents';
  if (text.match(/productivity|calendar|todo|notes|notion/)) return 'productivity';
  if (text.match(/writ|content|copy|grammar|blog/)) return 'writing';
  if (text.match(/chat|assistant|llm|gpt|claude|gemini/)) return 'apps';
  
  return 'top-tools';
}

/**
 * Load current tools from data files
 */
function loadCurrentTools() {
  const dataDir = path.join(__dirname, '../src/data/categories');
  const current = new Set();
  
  try {
    const files = fs.readdirSync(dataDir);
    for (const file of files) {
      if (file.endsWith('.ts')) {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
        // Extract URLs from the file
        const urls = content.match(/url:\s*["']([^"']+)["']/g) || [];
        urls.forEach(u => {
          const match = u.match(/["']([^"']+)["']/);
          if (match) current.add(match[1].toLowerCase());
        });
        // Extract tool names
        const names = content.match(/name:\s*["']([^"']+)["']/g) || [];
        names.forEach(n => {
          const match = n.match(/["']([^"']+)["']/);
          if (match) current.add(match[1].toLowerCase());
        });
      }
    }
  } catch (e) {
    console.error('Error loading current tools:', e.message);
  }
  
  return current;
}

/**
 * Generate markdown report of new tools
 */
function generateReport(newTools, currentTools) {
  const date = new Date().toISOString().split('T')[0];
  
  let report = `# AI Tools Update Report - ${date}\n\n`;
  report += `Found **${newTools.length}** potential new tools to review.\n\n`;
  report += `## Summary\n\n`;
  
  // Group by category
  const byCategory = {};
  for (const tool of newTools) {
    const cat = categorize(tool);
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(tool);
  }
  
  for (const [category, tools] of Object.entries(byCategory)) {
    report += `### ${category.charAt(0).toUpperCase() + category.slice(1)} (${tools.length} tools)\n\n`;
    
    for (const tool of tools.slice(0, 10)) {
      const stars = tool.stars ? ` ⭐ ${tool.stars.toLocaleString()}` : '';
      report += `- **[${tool.name}](${tool.url})**${stars}\n`;
      if (tool.description) {
        report += `  ${tool.description.substring(0, 150)}${tool.description.length > 150 ? '...' : ''}\n`;
      }
      report += `\n`;
    }
    
    if (tools.length > 10) {
      report += `  _...and ${tools.length - 10} more_\n\n`;
    }
  }
  
  report += `## How to Update\n\n`;
  report += `1. Review the tools above\n`;
  report += `2. Add relevant ones to \`src/data/categories/*.ts\`\n`;
  report += `3. Run \`npm run dev\` to preview\n`;
  report += `4. Commit and push\n\n`;
  report += `---\n`;
  report += `_Generated by Nestor AI Content Bot_\n`;
  
  return report;
}

/**
 * Main scraper function
 */
async function main() {
  console.log('🤖 Nestor AI Content Scraper\n');
  console.log('Loading current tools...');
  
  const currentTools = loadCurrentTools();
  console.log(`Found ${currentTools.size} existing tools/URLs\n`);
  
  const allTools = [];
  
  // Fetch from GitHub
  const githubTools = await fetchGitHubTrending();
  console.log(`  Found ${githubTools.length} GitHub repos\n`);
  allTools.push(...githubTools);
  
  // Filter out tools we already have
  const newTools = allTools.filter(tool => {
    const url = (tool.url || '').toLowerCase();
    const name = (tool.name || '').toLowerCase();
    return !currentTools.has(url) && !currentTools.has(name);
  });
  
  console.log(`\n📊 Results:`);
  console.log(`  Total scraped: ${allTools.length}`);
  console.log(`  Already tracked: ${allTools.length - newTools.length}`);
  console.log(`  New tools: ${newTools.length}\n`);
  
  // Generate report
  const report = generateReport(newTools, currentTools);
  
  // Save report
  const reportsDir = path.join(__dirname, '../reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  const reportPath = path.join(reportsDir, `tools-update-${new Date().toISOString().split('T')[0]}.md`);
  fs.writeFileSync(reportPath, report);
  console.log(`📝 Report saved to: ${reportPath}\n`);
  
  // Also save as latest
  fs.writeFileSync(path.join(reportsDir, 'latest.md'), report);
  
  return { newTools, report };
}

// Run
main().catch(console.error);

export { main, fetchGitHubTrending, categorize };
