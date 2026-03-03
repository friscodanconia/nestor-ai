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

// Function to clean question text (remove numbering and quotes)
function cleanQuestionText(question) {
  return question.replace(/^\d+\.\s*["']?/g, '').replace(/["']?$/g, '');
}

// Function to extract keywords from the question and answer
function extractKeywords(question, answer, category) {
  // Combine question and answer for analysis
  const content = (question + ' ' + answer).toLowerCase();
  
  // Get category keywords
  const categoryKeywords = categoryDefinitions.find(cat => cat.name === category)?.keywords || [];
  
  // Find matching keywords in the content
  const matchedKeywords = new Set();
  categoryKeywords.forEach(keyword => {
    const regex = new RegExp('\\b' + keyword.toLowerCase() + '\\b', 'g');
    if (regex.test(content)) {
      matchedKeywords.add(keyword);
    }
  });
  
  // Extract additional keywords (nouns and important terms)
  const words = content.split(/\s+/);
  const additionalKeywords = words.filter(word => {
    // Remove small words, numbers, and special characters
    return word.length > 4 && 
           !word.match(/^\d+$/) && 
           !word.match(/^[^\w\s]$/) &&
           !['about', 'these', 'those', 'their', 'there', 'would', 'should', 'could'].includes(word);
  });
  
  // Combine category keywords and additional keywords
  const allKeywords = [...matchedKeywords, ...new Set(additionalKeywords)];
  
  // Limit to 15 keywords max
  return [...new Set(allKeywords)].slice(0, 15);
}

// Main function
async function main() {
  try {
    console.log('Starting FAQ categorization and keyword enhancement process...');
    
    // Create backups of the original files
    const faqJsonPath = path.join(__dirname, '../src/data/faqData.json');
    const faqTsPath = path.join(__dirname, '../src/data/faqData.ts');
    const backupJsonPath = `${faqJsonPath}.backup-${Date.now()}`;
    const backupTsPath = `${faqTsPath}.backup-${Date.now()}`;
    
    fs.copyFileSync(faqJsonPath, backupJsonPath);
    fs.copyFileSync(faqTsPath, backupTsPath);
    console.log(`Created backups at ${backupJsonPath} and ${backupTsPath}`);
    
    // Read the FAQ data
    const faqs = JSON.parse(fs.readFileSync(faqJsonPath, 'utf8'));
    console.log(`Read ${faqs.length} FAQs from faqData.json`);
    console.log(`Found ${faqs.filter(faq => faq.category === 'General').length} FAQs with "General" category`);
    
    // Process the FAQs
    const enhancedFaqs = faqs.map(faq => {
      // Clean the question text
      const cleanedQuestion = cleanQuestionText(faq.question);
      
      // Recategorize if needed
      let category = faq.category;
      if (category === 'General') {
        category = categorizeByContent(cleanedQuestion, faq.answer);
      }
      
      // Extract or enhance keywords
      const keywords = extractKeywords(cleanedQuestion, faq.answer, category);
      
      return {
        ...faq,
        question: cleanedQuestion,
        category,
        keywords
      };
    });
    
    // Count FAQs by category
    const categoryCount = {};
    enhancedFaqs.forEach(faq => {
      categoryCount[faq.category] = (categoryCount[faq.category] || 0) + 1;
    });
    
    // Sort FAQs by category
    enhancedFaqs.sort((a, b) => a.category.localeCompare(b.category));
    
    // Write the enhanced FAQs back to the original JSON file
    fs.writeFileSync(faqJsonPath, JSON.stringify(enhancedFaqs, null, 2));
    
    // Generate the TypeScript file
    const tsContent = `// This file is auto-generated. Do not edit directly.
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords?: string[];
}

const faqData: FAQ[] = ${JSON.stringify(enhancedFaqs, null, 2)};

export default faqData;
`;
    fs.writeFileSync(faqTsPath, tsContent);
    
    console.log('Successfully enhanced FAQs with categories and keywords');
    console.log(`Updated JSON file saved to ${faqJsonPath}`);
    console.log(`Updated TypeScript file saved to ${faqTsPath}`);
    
    console.log('\nFAQ Categories:');
    Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .forEach(([category, count]) => {
        console.log(`- ${category}: ${count} FAQs`);
      });
    
    // Check if any FAQs are still in the "General" category
    const generalFaqs = enhancedFaqs.filter(faq => faq.category === 'General');
    if (generalFaqs.length > 0) {
      console.log(`\nWarning: ${generalFaqs.length} FAQs are still in the "General" category`);
      console.log('Sample of FAQs still in "General" category:');
      generalFaqs.slice(0, 5).forEach((faq, index) => {
        console.log(`\n${index + 1}. Question: ${faq.question}`);
        console.log(`   ID: ${faq.id}`);
      });
    } else {
      console.log('\nSuccess: All FAQs have been categorized into specific categories!');
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main().catch(console.error);
