import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Configuration, OpenAIApi } from 'openai';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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

// Function to check if an answer is missing or a placeholder
function isMissingOrPlaceholder(answer) {
  if (!answer) return true;
  
  const placeholderTexts = [
    'This is a placeholder answer that will be replaced with a proper response soon.',
    'This is a placeholder answer that will be replaced with a proper response soon',
    'placeholder',
    'Placeholder',
    'Answer not found in the original document',
    'Answer not found'
  ];
  
  return placeholderTexts.some(placeholder => answer.includes(placeholder));
}

// Find FAQs with missing or placeholder answers
const faqsWithMissingAnswers = faqData.filter(faq => isMissingOrPlaceholder(faq.answer));
console.log(`FAQs with missing or placeholder answers: ${faqsWithMissingAnswers.length}`);

// Function to clean the question text
function cleanQuestionText(question) {
  // Remove numbering and quotes
  return question.replace(/^\d+\.\s*["']?/g, '').replace(/["']?$/g, '');
}

// Function to generate an answer using OpenAI API
async function generateAnswer(faq) {
  const cleanQuestion = cleanQuestionText(faq.question);
  const category = faq.category;
  
  const prompt = `
As an AI marketing expert, please provide a detailed, accurate, and helpful answer to the following question about AI in marketing:

Question: "${cleanQuestion}" (Category: ${category})

Your answer should:
1. Be comprehensive and include specific examples or tools where relevant
2. Provide actionable advice that marketers can implement
3. Be accurate and reflect current best practices
4. Maintain a professional but conversational tone
5. Be between 100-200 words unless the question requires more detail

Answer:`;

  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      max_tokens: 500,
      temperature: 0.7,
    });
    
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(`Error generating answer for "${cleanQuestion}":`, error);
    return null;
  }
}

// Process FAQs with missing answers
async function processMissingAnswers() {
  console.log(`\nProcessing ${faqsWithMissingAnswers.length} FAQs with missing answers...\n`);
  
  for (let i = 0; i < faqsWithMissingAnswers.length; i++) {
    const faq = faqsWithMissingAnswers[i];
    console.log(`Processing FAQ #${i + 1}/${faqsWithMissingAnswers.length}: "${faq.question}"`);
    
    // Generate answer
    const answer = await generateAnswer(faq);
    
    if (answer) {
      // Find the FAQ in the original data and update its answer
      const faqIndex = faqData.findIndex(f => f.id === faq.id);
      if (faqIndex !== -1) {
        faqData[faqIndex].answer = answer;
        console.log(`Answer generated and saved for FAQ #${i + 1}`);
        
        // Save after each update to preserve progress
        fs.writeFileSync(faqJsonPath, JSON.stringify(faqData, null, 2));
        console.log(`Updated JSON file saved`);
      }
    }
    
    // Add a small delay between API calls to avoid rate limits
    if (i < faqsWithMissingAnswers.length - 1) {
      console.log('Waiting between API calls to avoid rate limits...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

// Generate the TypeScript file
function updateTsFile() {
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
}

// Main function
async function main() {
  if (faqsWithMissingAnswers.length > 0) {
    // Display the FAQs with missing answers
    console.log('\nFAQs with missing answers:');
    faqsWithMissingAnswers.forEach((faq, index) => {
      console.log(`\n${index + 1}. ID: ${faq.id}`);
      console.log(`   Question: ${faq.question}`);
      console.log(`   Category: ${faq.category}`);
      console.log(`   Current Answer: ${faq.answer}`);
    });
    
    // Process the FAQs with missing answers
    await processMissingAnswers();
    
    // Update the TypeScript file
    updateTsFile();
    
    console.log('\nAll missing answers have been generated and saved!');
  } else {
    console.log('No FAQs with missing answers found. All FAQs have proper answers!');
  }
}

// Run the main function
main().catch(error => {
  console.error('Error:', error);
});
