// Script to fix FAQ numbering issues
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Main function
async function main() {
  try {
    console.log('Starting FAQ numbering fix process...');
    
    // Read the FAQ data
    const faqPath = path.join(__dirname, '..', 'src', 'data', 'faqData.json');
    const faqs = JSON.parse(fs.readFileSync(faqPath, 'utf8'));
    
    console.log(`Read ${faqs.length} FAQs from faqData.json`);
    
    // Fix the numbering by removing any leading numbers from questions
    const fixedFaqs = faqs.map(faq => {
      // Remove any leading numbers like "4. ", "13. ", etc.
      const cleanedQuestion = faq.question.replace(/^\d+\.\s*["']?/, '"');
      
      // Remove any extra quotes at the beginning if they exist
      let finalQuestion = cleanedQuestion;
      if (finalQuestion.startsWith('""')) {
        finalQuestion = finalQuestion.substring(1);
      } else if (!finalQuestion.startsWith('"')) {
        finalQuestion = '"' + finalQuestion;
      }
      
      // Ensure the question ends with a quote if it started with one
      if (finalQuestion.startsWith('"') && !finalQuestion.endsWith('"')) {
        finalQuestion = finalQuestion + '"';
      }
      
      return { ...faq, question: finalQuestion };
    });
    
    // Group FAQs by category
    const faqsByCategory = {};
    fixedFaqs.forEach(faq => {
      if (!faqsByCategory[faq.category]) {
        faqsByCategory[faq.category] = [];
      }
      faqsByCategory[faq.category].push(faq);
    });
    
    // Sort categories alphabetically
    const sortedCategories = Object.keys(faqsByCategory).sort();
    
    // Create a new array with FAQs grouped by category
    const organizedFaqs = [];
    sortedCategories.forEach(category => {
      // Add all FAQs from this category
      organizedFaqs.push(...faqsByCategory[category]);
    });
    
    // Write the fixed FAQs to the JSON file
    fs.writeFileSync(faqPath, JSON.stringify(organizedFaqs, null, 2));
    
    // Also update the TypeScript version
    const tsOutputPath = path.join(__dirname, '..', 'src', 'data', 'faqData.ts');
    const tsContent = `// Auto-generated from fixFaqNumbering.js
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords?: string;
}

export const faqData: FAQItem[] = ${JSON.stringify(organizedFaqs, null, 2)};
`;
    fs.writeFileSync(tsOutputPath, tsContent);
    
    console.log('Successfully fixed FAQ numbering');
    console.log(`Updated ${faqPath}`);
    console.log(`Updated ${tsOutputPath}`);
    
    console.log('\nFAQ Categories:');
    sortedCategories.forEach(category => {
      console.log(`- ${category}: ${faqsByCategory[category].length} FAQs`);
    });
    
  } catch (error) {
    console.error('Error in FAQ numbering fix process:', error);
  }
}

// Run the main function
main().catch(console.error);
