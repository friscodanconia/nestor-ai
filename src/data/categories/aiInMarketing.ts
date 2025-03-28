export interface MarketingTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const aiInMarketingData = {
  title: "AI in Marketing",
  gradientClasses: "bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200",
  description: "AI is rapidly changing and impacting industries and functions. How can marketers use AI tools to improve productivity, idea generation, and a host of other use cases. I have been a CMO before, so I will weave in that experience and suggest ways you can start experimenting with AI tools. AIDA is not dead, but needs a fresher approach.",
  
  topics: [
    {
      title: "Traffic Analysis",
      description: "LLM traffic is a tale of two cities. LLM traffic has jumped 800%, but LLM's encounter zero click phenomenon where many users read answers in chatbot interface. As a marketer, you have to do both. First understand, how much traffic is coming from LLMs (top three drive 80%) and second, how do you rank for your top queries? For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-traffic-analysis"
    },
    {
      title: "Business Ranking",
      description: "LLMs use a combination of training data & mentions, semantic relevance, traditional SEO signals, frequency and confidence, and user intent + context as foundational mechanisms to rank brands in query results. Brands can improve their ranking by using question based formats (FAQs, detailed blogs), topic clusters, proprietary data, and schema markups to stay relevant. In cases where LLMs don't use RAG, brands should check content ranking for both cutoff dates and real-time indexes. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-business-ranking"
    },
    {
      title: "Competitor Research",
      description: "Competitor research can be done by asking LLMs about your competitors, their products, strengths, and weaknesses. You can also ask for a comparison between your company and competitors. While LLMs may not have the most up-to-date information, they can provide a good starting point for your research. For more accurate information, combine LLM insights with traditional research methods. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-competitor-research"
    },
    {
      title: "ASO Strategy",
      description: "Build better App Store Optimization plans using AI-powered tools that analyze competitor keywords, suggest optimal metadata, and track performance metrics. These tools can help you identify high-potential keywords, optimize your app description, and improve conversion rates through A/B testing of visual elements. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-aso-strategy"
    },
    {
      title: "Product Imagery",
      description: "AI image generation tools like Midjourney and DALL-E can create professional product images, lifestyle shots, and marketing visuals at a fraction of the cost of traditional photography. These tools allow marketers to quickly iterate on visual concepts, test different styles, and create consistent brand imagery across campaigns. For a detailed strategy, read more here.",
      links: [
        { name: "Midjourney", url: "https://www.midjourney.com" },
        { name: "DALL-E", url: "https://openai.com/dall-e-3" }
      ],
      readMoreUrl: "https://nestor.guide/blog/ai-product-imagery"
    },
    {
      title: "Campaign Building",
      description: "AI can streamline campaign building by generating creative concepts, writing copy variations, designing visual assets, and suggesting targeting parameters based on historical performance data. Tools like Persado can optimize messaging for different audience segments, while platforms like Phrasee can generate and test email subject lines that drive higher open rates. For a detailed strategy, read more here.",
      links: [
        { name: "Persado", url: "https://www.persado.com" }
      ],
      readMoreUrl: "https://nestor.guide/blog/ai-campaign-building"
    },
    {
      title: "Ad Copy",
      description: "AI tools can generate multiple versions of ad copy tailored to different platforms, audience segments, and campaign objectives. They can analyze historical performance data to identify patterns in successful messaging and suggest optimizations for future campaigns. Some tools can even automatically adapt copy based on real-time performance metrics to improve conversion rates. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-ad-copy"
    },
    {
      title: "Content Creation",
      description: "AI can assist with content creation by generating blog outlines, drafting articles, suggesting headlines, and even creating basic graphics. Tools like ChatGPT can help overcome writer's block by providing ideas and alternative phrasings, while image generation tools can create custom illustrations to accompany your content. For best results, use AI as a collaborative tool rather than a replacement for human creativity. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-content-creation"
    },
    {
      title: "Social Media",
      description: "AI tools can help manage social media by scheduling posts, suggesting optimal posting times, generating content ideas, and analyzing engagement metrics. They can also monitor brand mentions, identify trending topics, and provide sentiment analysis to help you understand how your audience perceives your brand. Some advanced tools can even create personalized responses to common customer inquiries. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-social-media"
    }
  ]
};
