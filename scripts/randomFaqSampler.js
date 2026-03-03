import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the FAQ data file
const faqDataPath = path.join(__dirname, '../src/data/faqData.json');

// Number of random FAQs to sample
const SAMPLE_SIZE = 10;

// Read the FAQ data
console.log(`Reading FAQ data from ${faqDataPath}...`);
const faqData = JSON.parse(fs.readFileSync(faqDataPath, 'utf8'));
console.log(`Total FAQs: ${faqData.length}`);

// Get unique categories
const categories = [...new Set(faqData.map(faq => faq.category))];
console.log(`\nCategories (${categories.length}):`);
categories.forEach(category => {
  const count = faqData.filter(faq => faq.category === category).length;
  console.log(`- ${category}: ${count} FAQs`);
});

// Function to get random FAQs, ensuring at least one from each category if possible
function getRandomSamplesAcrossCategories(data, sampleSize) {
  // Ensure we don't try to sample more than we have
  sampleSize = Math.min(sampleSize, data.length);
  
  // First, try to get one from each category
  let samples = [];
  const categorySamples = {};
  
  // Get one random FAQ from each category
  categories.forEach(category => {
    const categoryFaqs = data.filter(faq => faq.category === category);
    if (categoryFaqs.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryFaqs.length);
      categorySamples[category] = categoryFaqs[randomIndex];
      samples.push(categoryFaqs[randomIndex]);
    }
  });
  
  // If we have more samples than requested, randomly remove some
  if (samples.length > sampleSize) {
    while (samples.length > sampleSize) {
      const randomIndex = Math.floor(Math.random() * samples.length);
      samples.splice(randomIndex, 1);
    }
  } 
  // If we need more samples, add random ones from the remaining FAQs
  else if (samples.length < sampleSize) {
    // Create a copy of data excluding already sampled FAQs
    const remainingFaqs = data.filter(faq => 
      !samples.some(sample => sample.id === faq.id)
    );
    
    // Add random FAQs until we reach the sample size or run out of FAQs
    while (samples.length < sampleSize && remainingFaqs.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingFaqs.length);
      samples.push(remainingFaqs[randomIndex]);
      remainingFaqs.splice(randomIndex, 1);
    }
  }
  
  return samples;
}

// Get random samples
const randomSamples = getRandomSamplesAcrossCategories(faqData, SAMPLE_SIZE);

// Output the random samples
console.log(`\n==== ${randomSamples.length} Random FAQ Samples ====\n`);
randomSamples.forEach((faq, index) => {
  console.log(`\n===== SAMPLE #${index + 1} =====`);
  console.log(`ID: ${faq.id}`);
  console.log(`Category: ${faq.category}`);
  console.log(`Question: ${faq.question}`);
  console.log(`\nAnswer: ${faq.answer}`);
  console.log(`\n${'='.repeat(50)}`);
});

// Save the samples to a file for easier review
const outputPath = path.join(__dirname, '../faq_samples.json');
fs.writeFileSync(outputPath, JSON.stringify(randomSamples, null, 2));
console.log(`\nSamples saved to: ${outputPath}`);

// Also create a markdown file for easier reading
const markdownPath = path.join(__dirname, '../faq_samples.md');
let markdown = `# FAQ Quality Check Samples\n\n`;
markdown += `*Generated on: ${new Date().toLocaleString()}*\n\n`;
markdown += `This document contains ${randomSamples.length} randomly selected FAQs for quality review.\n\n`;

randomSamples.forEach((faq, index) => {
  markdown += `## Sample ${index + 1}: ${faq.category}\n\n`;
  markdown += `**Question:** ${faq.question}\n\n`;
  markdown += `**Answer:** ${faq.answer}\n\n`;
  markdown += `**ID:** ${faq.id}\n\n`;
  markdown += `---\n\n`;
});

fs.writeFileSync(markdownPath, markdown);
console.log(`Markdown report saved to: ${markdownPath}`);
