// Script to categorize "General" FAQs into more specific categories
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Category definitions with associated keywords
const categoryDefinitions = [
  {
    name: 'Content Creation',
    keywords: ['content', 'blog', 'article', 'writing', 'copywriting', 'headline', 'copy', 'text', 'post', 'writer']
  },
  {
    name: 'Social Media',
    keywords: ['social', 'facebook', 'instagram', 'twitter', 'linkedin', 'tiktok', 'post', 'engagement', 'follower', 'platform']
  },
  {
    name: 'Email Marketing',
    keywords: ['email', 'newsletter', 'subject line', 'campaign', 'autoresponder', 'sequence', 'open rate', 'click']
  },
  {
    name: 'SEO & Content Strategy',
    keywords: ['seo', 'search', 'keyword', 'ranking', 'serp', 'google', 'organic', 'traffic', 'backlink']
  },
  {
    name: 'Customer Experience & Personalization',
    keywords: ['customer', 'personalization', 'experience', 'journey', 'satisfaction', 'service', 'support', 'chatbot']
  },
  {
    name: 'Analytics & Data',
    keywords: ['analytics', 'data', 'metric', 'measure', 'report', 'dashboard', 'kpi', 'roi', 'attribution', 'track']
  },
  {
    name: 'E-commerce & Retail',
    keywords: ['ecommerce', 'e-commerce', 'retail', 'shop', 'store', 'product', 'inventory', 'sale', 'conversion']
  },
  {
    name: 'AI Ethics & Compliance',
    keywords: ['ethics', 'compliance', 'privacy', 'bias', 'regulation', 'legal', 'gdpr', 'ccpa', 'security']
  },
  {
    name: 'B2B Marketing',
    keywords: ['b2b', 'lead', 'generation', 'account', 'sales', 'funnel', 'pipeline', 'prospect', 'abm']
  },
  {
    name: 'AI Strategy & Implementation',
    keywords: ['strategy', 'implementation', 'integrate', 'adoption', 'workflow', 'process', 'roadmap', 'transform']
  },
  {
    name: 'AI Tools & Platforms',
    keywords: ['tool', 'platform', 'software', 'app', 'application', 'solution', 'technology', 'system', 'program']
  },
  {
    name: 'AI for Marketing Automation',
    keywords: ['automation', 'automate', 'workflow', 'process', 'efficiency', 'productivity', 'time-saving']
  },
  {
    name: 'AI for Video & Audio',
    keywords: ['video', 'audio', 'podcast', 'youtube', 'transcription', 'voice', 'speech', 'sound']
  },
  {
    name: 'AI for Image & Design',
    keywords: ['image', 'design', 'graphic', 'photo', 'picture', 'visual', 'creative', 'art', 'illustration']
  },
  {
    name: 'Performance Marketing',
    keywords: ['performance', 'ppc', 'paid', 'advertising', 'ad', 'campaign', 'conversion', 'cpa', 'cpc', 'ctr']
  },
  // New categories for emerging topics
  {
    name: 'AI Content Quality & Accuracy',
    keywords: ['quality', 'accuracy', 'reliable', 'factual', 'plagiarism', 'plagiarize', 'original', 'hallucination', 'error', 'mistake', 'trust']
  },
  {
    name: 'Brand Voice & Identity',
    keywords: ['brand', 'voice', 'identity', 'tone', 'style', 'persona', 'guidelines', 'consistent', 'inconsistent', 'tagline', 'slogan']
  },
  {
    name: 'AI Training & Fine-tuning',
    keywords: ['train', 'training', 'fine-tune', 'fine-tuning', 'custom', 'customize', 'model', 'learn', 'learning']
  },
  {
    name: 'AI for Long-form Content',
    keywords: ['long-form', 'ebook', 'whitepaper', 'report', 'guide', 'book', 'lengthy', 'comprehensive', 'in-depth']
  },
  {
    name: 'AI ROI & Cost Effectiveness',
    keywords: ['roi', 'cost', 'price', 'expensive', 'affordable', 'investment', 'return', 'value', 'budget', 'spend']
  },
  {
    name: 'AI for Multilingual & Global Marketing',
    keywords: ['language', 'translate', 'translation', 'multilingual', 'global', 'international', 'localization', 'region', 'country']
  },
  {
    name: 'AI-Powered Market Research',
    keywords: ['research', 'market', 'competitor', 'analysis', 'insight', 'trend', 'consumer', 'behavior', 'survey']
  },
  {
    name: 'AI for Crisis Management',
    keywords: ['crisis', 'emergency', 'reputation', 'damage', 'control', 'public', 'statement', 'sensitive', 'controversy']
  },
  {
    name: 'AI & Human Collaboration',
    keywords: ['human', 'collaboration', 'teamwork', 'together', 'partnership', 'assist', 'augment', 'replace', 'supervision']
  },
  {
    name: 'Generative AI Applications',
    keywords: ['generative', 'generate', 'creation', 'create', 'synthetic', 'artificial', 'gpt', 'dalle', 'midjourney', 'stable diffusion']
  }
];

// Function to categorize an FAQ based on its content
function categorizeByContent(question, answer) {
  // Combine question and answer for analysis
  const content = (question + ' ' + answer).toLowerCase();
  
  // Score for each category
  const scores = categoryDefinitions.map(category => {
    let score = 0;
    category.keywords.forEach(keyword => {
      // Count occurrences of the keyword
      const regex = new RegExp('\\b' + keyword.toLowerCase() + '\\b', 'g');
      const matches = content.match(regex);
      if (matches) {
        score += matches.length;
      }
    });
    return { name: category.name, score };
  });
  
  // Sort by score (highest first)
  scores.sort((a, b) => b.score - a.score);
  
  // If the highest score is 0, keep as "General"
  if (scores[0].score === 0) {
    return 'General';
  }
  
  // Return the category with the highest score
  return scores[0].name;
}

// Main function
async function main() {
  try {
    console.log('Starting FAQ categorization process...');
    
    // Read the merged FAQ data
    const faqPath = path.join(__dirname, '..', 'src', 'data', 'mergedFaqData.json');
    const faqs = JSON.parse(fs.readFileSync(faqPath, 'utf8'));
    
    console.log(`Read ${faqs.length} FAQs from mergedFaqData.json`);
    console.log(`Found ${faqs.filter(faq => faq.category === 'General').length} FAQs with "General" category`);
    
    // Categorize the FAQs
    const categorizedFaqs = faqs.map(faq => {
      // Only recategorize "General" FAQs
      if (faq.category === 'General') {
        const newCategory = categorizeByContent(faq.question, faq.answer);
        return { ...faq, category: newCategory };
      }
      return faq;
    });
    
    // Count FAQs by category
    const categoryCount = {};
    categorizedFaqs.forEach(faq => {
      categoryCount[faq.category] = (categoryCount[faq.category] || 0) + 1;
    });
    
    // Sort FAQs by category
    categorizedFaqs.sort((a, b) => a.category.localeCompare(b.category));
    
    // Write the categorized FAQs to a new JSON file
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'categorizedFaqData.json');
    fs.writeFileSync(outputPath, JSON.stringify(categorizedFaqs, null, 2));
    
    // Also create a TypeScript version
    const tsOutputPath = path.join(__dirname, '..', 'src', 'data', 'categorizedFaqData.ts');
    const tsContent = `// Auto-generated from categorizeFaqs.js
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords?: string;
}

export const faqData: FAQItem[] = ${JSON.stringify(categorizedFaqs, null, 2)};
`;
    fs.writeFileSync(tsOutputPath, tsContent);
    
    console.log('Successfully categorized FAQs');
    console.log(`Output saved to: ${outputPath}`);
    console.log(`TypeScript version saved to: ${tsOutputPath}`);
    
    console.log('\nFAQ Categories:');
    Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .forEach(([category, count]) => {
        console.log(`- ${category}: ${count} FAQs`);
      });
    
  } catch (error) {
    console.error('Error in categorization process:', error);
  }
}

// Run the main function
main().catch(console.error);
