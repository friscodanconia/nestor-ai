// This file re-exports the FAQ data in the format expected by the application
import faqDataDefault from './faqData';

// Re-export as named export for components that import { faqData }
export const faqData = faqDataDefault;

// Also maintain the default export for components that import faqData directly
export default faqDataDefault;

// Re-export the FAQ interface
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords?: string[];
}
