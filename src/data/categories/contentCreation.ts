export interface ContentCreationTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const contentCreationData = {
  title: "Content Creation & Copywriting",
  gradientClasses: "bg-gradient-to-br from-yellow-200 to-amber-200",
  description: "AI tools are revolutionizing content creation and copywriting, enabling marketers, writers, and businesses to generate high-quality text faster than ever before. From blog posts to marketing copy, these tools can help you overcome writer's block, brainstorm ideas, and create polished content in minutes.",
  
  topics: [
    {
      title: "Blog & Article Writing",
      description: "AI-powered tools like Jasper.ai can help you generate blog posts, articles, and long-form content with minimal input. Simply provide a topic, some keywords, and your desired tone, and the AI will create a draft that you can refine. These tools are particularly useful for creating SEO-friendly content that ranks well in search engines. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-blog-writing"
    },
    {
      title: "Marketing Copy",
      description: "Copy.ai specializes in creating marketing materials like ad copy, email campaigns, and product descriptions. It can generate multiple variations of your copy, allowing you to test different approaches and find what resonates best with your audience. The tool understands marketing principles and can adapt its output to match your brand voice. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-marketing-copy"
    },
    {
      title: "Social Media Content",
      description: "Writesonic excels at creating engaging social media captions, posts, and even entire content calendars. It can generate platform-specific content optimized for Twitter, Instagram, LinkedIn, or Facebook, ensuring your message is formatted appropriately for each channel. The tool can also suggest hashtags and engagement prompts to boost your social media performance. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-social-media-content"
    },
    {
      title: "Content Optimization",
      description: "AI tools can analyze your existing content and suggest improvements for readability, SEO, and engagement. They can identify areas where your content could be more concise, more detailed, or better structured. Some tools can even rewrite sections of your content to improve its performance without changing your core message. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-content-optimization"
    },
    {
      title: "Multilingual Content",
      description: "AI translation and localization tools have advanced significantly, allowing you to create content in multiple languages without hiring translators. These tools go beyond simple translation by adapting your content to cultural nuances and local expressions, ensuring it resonates with international audiences. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-multilingual-content"
    }
  ]
};
