export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is Nestor AI?",
    answer: "Nestor AI is a comprehensive guide to AI tools and resources across various categories. It helps users discover, compare, and learn about the best AI tools for different tasks and industries.",
    category: "General"
  },
  {
    question: "How are the AI tools organized on Nestor?",
    answer: "Nestor organizes AI tools into various categories such as Content Creation, Image Design, Personal Productivity, Education, Audio, Video, and more. Each category contains curated lists of tools with descriptions and links.",
    category: "Navigation"
  },
  {
    question: "Are the tools on Nestor free to use?",
    answer: "Nestor features a mix of free and paid tools. Each tool listing typically indicates whether it offers a free tier, trial period, or requires a subscription. We try to highlight affordable options and good free alternatives where possible.",
    category: "Pricing"
  },
  {
    question: "How often is Nestor updated with new AI tools?",
    answer: "Nestor is regularly updated as new AI tools emerge and existing ones evolve. Our team monitors the AI landscape to add innovative tools and update information about existing ones to ensure the guide remains current and valuable.",
    category: "Updates"
  },
  {
    question: "Can I suggest an AI tool to be added to Nestor?",
    answer: "Yes! We welcome suggestions for new tools to add to our guide. While we can't guarantee every suggestion will be included, we value community input to help make Nestor as comprehensive and useful as possible.",
    category: "Contributions"
  },
  {
    question: "What is Model Context Protocol (MCP)?",
    answer: "Model Context Protocol (MCP) is a framework for structuring and managing the context that AI models use to generate responses. It provides a standardized way to organize information, instructions, and constraints that guide AI behavior.",
    category: "Technical"
  },
  {
    question: "How can I use AI for content creation?",
    answer: "AI can assist with content creation in multiple ways: generating ideas and outlines, writing drafts, editing and improving text, creating variations for A/B testing, and even helping with SEO optimization. Tools like ChatGPT, Jasper, and Copy.ai are popular choices for content creation.",
    category: "Content Creation"
  },
  {
    question: "What AI tools are recommended for image generation?",
    answer: "Popular AI image generation tools include DALL-E, Midjourney, Stable Diffusion, and Leonardo.ai. These tools can create original images based on text prompts, with varying styles and capabilities.",
    category: "Image Design"
  },
  {
    question: "How can AI help with marketing?",
    answer: "AI can enhance marketing efforts through automated content creation, personalized customer experiences, predictive analytics, chatbots for customer service, social media management, and optimized ad targeting. Tools like Jasper, MarketMuse, and Persado are specifically designed for marketing applications.",
    category: "Marketing"
  },
  {
    question: "What are GitHub Repos in the context of Nestor?",
    answer: "The GitHub Repos section of Nestor features curated lists of open-source AI projects hosted on GitHub. These repositories include LLMs, agent frameworks, tools, and applications that developers can use, contribute to, or learn from.",
    category: "Development"
  }
];
