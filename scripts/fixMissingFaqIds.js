import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the FAQ data files
const faqJsonPath = path.join(__dirname, '../src/data/faqData.json');
const faqTsPath = path.join(__dirname, '../src/data/faqData.ts');

// Create a backup of the original files
const backupJsonPath = `${faqJsonPath}.backup-${Date.now()}`;
const backupTsPath = `${faqTsPath}.backup-${Date.now()}`;
fs.copyFileSync(faqJsonPath, backupJsonPath);
fs.copyFileSync(faqTsPath, backupTsPath);
console.log(`Created backups at ${backupJsonPath} and ${backupTsPath}`);

// Read the FAQ data
console.log(`Reading FAQ data from ${faqJsonPath}...`);
const faqData = JSON.parse(fs.readFileSync(faqJsonPath, 'utf8'));
console.log(`Total FAQs: ${faqData.length}`);

// Count FAQs with missing IDs
const missingIdCount = faqData.filter(faq => !faq.id).length;
console.log(`FAQs with missing IDs: ${missingIdCount}`);

// Function to generate a slug from a question
function generateSlug(question, category) {
  // Remove any numbers and special characters from the beginning of the question
  let cleanQuestion = question.replace(/^\d+\.\s*["']?/g, '').replace(/["']?$/g, '');
  
  // Convert to lowercase and replace spaces with underscores
  let slug = cleanQuestion.toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, '_')    // Replace spaces with underscores
    .trim()
    .substring(0, 30);       // Limit length
  
  // Add category prefix if available
  if (category && category !== 'General') {
    const categoryPrefix = category.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 15);
    
    return `${categoryPrefix}_${slug}`;
  }
  
  return slug;
}

// Fix missing IDs
let fixedCount = 0;
const processedIds = new Set(); // Track IDs to avoid duplicates

faqData.forEach((faq, index) => {
  if (!faq.id) {
    // Generate a base ID from the question and category
    let baseId = generateSlug(faq.question, faq.category);
    
    // Ensure ID is unique by adding a number if needed
    let newId = baseId;
    let counter = 1;
    while (processedIds.has(newId)) {
      newId = `${baseId}_${counter}`;
      counter++;
    }
    
    // Assign the new ID
    faq.id = newId;
    processedIds.add(newId);
    fixedCount++;
  } else {
    // Add existing ID to the set
    processedIds.add(faq.id);
  }
});

console.log(`Fixed ${fixedCount} FAQs with missing IDs`);

// Save the updated FAQ data to JSON
fs.writeFileSync(faqJsonPath, JSON.stringify(faqData, null, 2));
console.log(`Updated JSON file saved to ${faqJsonPath}`);

// Generate the TypeScript file
const tsContent = `// This file is auto-generated. Do not edit directly.
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords?: string[];
}

const faqData: FAQ[] = ${JSON.stringify(faqData, null, 2)};

export default faqData;
`;

fs.writeFileSync(faqTsPath, tsContent);
console.log(`Updated TypeScript file saved to ${faqTsPath}`);

// Output a sample of fixed FAQs
console.log('\nSample of FAQs with fixed IDs:');
const fixedFaqs = faqData.filter((_, index) => index < 801 && index >= 801 - fixedCount);
fixedFaqs.slice(0, 5).forEach((faq, index) => {
  console.log(`\n${index + 1}. Question: ${faq.question}`);
  console.log(`   ID: ${faq.id}`);
  console.log(`   Category: ${faq.category}`);
});
