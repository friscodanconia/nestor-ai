export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  // General FAQs
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
  
  // Social Media Marketing FAQs
  {
    question: "How can AI improve social media marketing strategies?",
    answer: "AI analyzes vast data sets to identify trends, predict audience behavior, automate content creation, optimize posting times, and personalize campaigns. Tools like Hootsuite Insights or Sprout Social use AI to streamline these tasks.",
    category: "Social Media Marketing"
  },
  {
    question: "What AI tools automate social media content creation?",
    answer: "Tools like Jasper.ai, Copy.ai, and ChatGPT generate captions, hashtags, and post ideas. Canva's Magic Write helps create visual content with AI-driven text suggestions.",
    category: "Social Media Marketing"
  },
  {
    question: "How does AI optimize social media scheduling?",
    answer: "Platforms like Buffer and Later use AI to analyze engagement patterns and recommend optimal posting times. Sprinklr even auto-schedules posts based on predicted peak engagement.",
    category: "Social Media Marketing"
  },
  {
    question: "Can AI help manage social media ads more effectively?",
    answer: "Yes. Google Ads Smart Bidding and Facebook's Automated Ads use machine learning to adjust bids, target audiences, and allocate budgets in real time for better ROI.",
    category: "Social Media Marketing"
  },
  {
    question: "What AI tools analyze social media performance?",
    answer: "Brandwatch, Sprout Social, and HubSpot use AI to track metrics (likes, shares, sentiment) and generate actionable insights. Crayon monitors competitors' social strategies.",
    category: "Social Media Marketing"
  },
  {
    question: "How do AI chatbots enhance social media engagement?",
    answer: "Tools like ManyChat (Facebook/Instagram) and MobileMonkey automate responses to DMs, comments, and queries, freeing teams to focus on complex interactions.",
    category: "Social Media Marketing"
  },
  {
    question: "Can AI create social media visuals?",
    answer: "Yes. Canva's AI design tools, Adobe Firefly, and MidJourney generate images, infographics, and video thumbnails tailored to your brand's style.",
    category: "Social Media Marketing"
  },
  {
    question: "Does AI help decide the best time to post on different social platforms?",
    answer: "Yes, AI-powered tools like Sprout Social, Hootsuite, and Buffer analyze your audience's activity patterns and recommend optimal posting times for each platform. They look at when your specific followers are most active and engaged.",
    category: "Social Media Marketing"
  },
  
  // Performance Marketing FAQs
  {
    question: "What is AI's role in performance marketing?",
    answer: "AI automates bid optimization, audience targeting, ad creative testing, and conversion prediction. It uses real-time data to maximize ROI for campaigns (e.g., lowering CPA or boosting CTR).",
    category: "Performance Marketing"
  },
  {
    question: "How does AI improve PPC campaigns?",
    answer: "Tools like Google Ads Smart Bidding and Microsoft Advertising's AI adjust bids dynamically based on user intent, competition, and conversion likelihood, reducing wasted spend.",
    category: "Performance Marketing"
  },
  {
    question: "Can AI predict customer lifetime value (CLV) for targeting?",
    answer: "Yes. Platforms like HubSpot and Adobe Analytics use machine learning to segment high-CLV audiences, allowing marketers to allocate budgets to the most profitable users.",
    category: "Performance Marketing"
  },
  {
    question: "How does AI optimize ad creatives?",
    answer: "Tools like Creative.ai and Pencil generate and A/B test thousands of ad variations (images, copy, CTAs) to identify top performers. Example: Unilever uses AI to test 40% more creatives in half the time.",
    category: "Performance Marketing"
  },
  {
    question: "What AI tools prevent ad fraud?",
    answer: "Platforms like Fraudlogix and DoubleVerify use AI to detect bot traffic, fake clicks, and invalid impressions, protecting ad spend. Example: AI reduced Coca-Cola's ad fraud by 30%.",
    category: "Performance Marketing"
  },
  {
    question: "Is it safe to let AI handle my entire ad budget?",
    answer: "It's best to start with a portion of your budget and gradually increase as you gain confidence in the AI's performance. Set clear spending limits and monitor regularly, especially in the beginning.",
    category: "Performance Marketing"
  },
  
  // Content Creation FAQs
  {
    question: "How can I use AI for content creation?",
    answer: "AI can assist with content creation in multiple ways: generating ideas and outlines, writing drafts, editing and improving text, creating variations for A/B testing, and even helping with SEO optimization. Tools like ChatGPT, Jasper, and Copy.ai are popular choices for content creation.",
    category: "Content Creation"
  },
  {
    question: "How do I use AI to whip up catchy headlines for my blog posts?",
    answer: "Try a tool like Jasper or Copy.ai—give them a quick brief about your topic, audience, and tone, and they'll generate multiple headline options. Just be sure to tweak the AI's suggestions so they match your brand voice (and aren't too clickbaity).",
    category: "Content Creation"
  },
  {
    question: "Is there a quick AI trick to turn my boring corporate copy into something more fun?",
    answer: "Yes—use generative AI (like ChatGPT or Sudowrite) to rephrase paragraphs. Prompt the AI with: 'Rewrite this to sound more casual and playful but keep the key points.' Then polish any awkward AI phrasing. Remember, you're the editor in chief; AI is just your first draft buddy.",
    category: "Content Creation"
  },
  {
    question: "How do I get AI to keep my brand's tone consistent across all our content?",
    answer: "Feed the AI a style guide or example passages that showcase your brand voice. Most AI copy tools allow you to specify tone or personality. Store your brand guidelines in prompt templates—this helps ensure the AI doesn't suddenly go from 'quirky' to 'formal professor' in the same piece.",
    category: "Content Creation"
  },
  {
    question: "Can AI create full eBooks or whitepapers for me, or is that pushing it?",
    answer: "It can draft them, but you'll need heavy editing to ensure depth, accuracy, and original insight. Tools like Jasper, Writesonic, or OpenAI's models can help generate outlines and sections fast. Then you add expert knowledge and finalize. Think of AI as your writing intern, not a fully-fledged thought leader.",
    category: "Content Creation"
  },
  {
    question: "Is there a free AI tool I can try before paying for a fancy subscription?",
    answer: "Yes—Bing Chat (Microsoft's GPT-4 powered search) and ChatGPT's free version are decent starting points. They can handle basic copy tasks if you structure prompts well. Many premium AI platforms also offer free tiers or trials, so you can test them before committing.",
    category: "Content Creation"
  },
  {
    question: "Should I mention that my content was AI-generated?",
    answer: "Legally, not typically—AI isn't recognized as an author. Ethically, many brands just treat AI as a behind-the-scenes tool. However, transparency builds trust, so if you rely heavily on AI, you might disclaim 'written with the assistance of AI' in some contexts, especially for thought leadership content.",
    category: "Content Creation"
  },
  {
    question: "How do I train AI on my brand guidelines or existing content library?",
    answer: "Some platforms let you upload style guides or custom corpuses. For instance, OpenAI's fine-tuning or Jasper Brand Voice. Otherwise, you can systematically feed the AI examples and say, 'Mirror this style.' It's not perfect, but repeated examples and instructions help AI learn your brand's nuances.",
    category: "Content Creation"
  },
  
  // SEO FAQs
  {
    question: "I'm worried AI-generated copy might hurt our SEO—should I be concerned?",
    answer: "Not if the content is original and valuable. Google's stance is that they don't penalize AI content per se, but they do penalize spammy or low-quality text. So, focus on quality control—review everything the AI produces, add human insights, and ensure it's genuinely helpful to readers.",
    category: "SEO"
  },
  {
    question: "Which AI tool should I try first if I want quick keyword ideas for my blog posts?",
    answer: "You can start with ChatGPT (free version) or test out Keyword Insights AI. For example, if you're blogging about gluten-free baking, you can say: 'Give me 15 long-tail keywords on gluten-free pastry techniques,' and it'll spit out topics like 'gluten-free puff pastry hacks' or 'best gluten-free flour blends for croissants.'",
    category: "SEO"
  },
  {
    question: "How do I use AI to cluster my keywords so I know which ones belong on the same page?",
    answer: "Tools like Keyword Insights or Surfer SEO can group terms that rank together. For instance, if you input 200 keywords about electric bikes, the AI might cluster them into 'budget electric bikes,' 'foldable e-bikes,' and 'commuter e-bikes.' This tells you which phrases can be targeted on the same page.",
    category: "SEO"
  },
  {
    question: "Is AI-powered keyword research more reliable than just using Google Keyword Planner?",
    answer: "It's not about reliability—AI tools can interpret search intent better and suggest semantically related phrases. Google Keyword Planner is still a must for raw volume data. A combined approach is best: run volumes in Keyword Planner, then feed those terms to an AI tool like Frase or MarketMuse to discover related concepts or subtopics.",
    category: "SEO"
  },
  {
    question: "How do I use AI to optimize my meta descriptions en masse?",
    answer: "Export all your URLs, titles, and relevant keywords in a sheet. Then prompt ChatGPT with something like: 'For each URL, write a 150-character meta description using this keyword, but keep it natural.' Tools like BulkMeta (unofficial solutions) can automate the process further, but you'll want to do a quick final review for accuracy.",
    category: "SEO"
  },
  
  // Image Design FAQs
  {
    question: "What AI tools are recommended for image generation?",
    answer: "Popular AI image generation tools include DALL-E, Midjourney, Stable Diffusion, and Leonardo.ai. These tools can create original images based on text prompts, with varying styles and capabilities.",
    category: "Image Design"
  },
  
  // Marketing FAQs
  {
    question: "How can AI help with marketing?",
    answer: "AI can enhance marketing efforts through automated content creation, personalized customer experiences, predictive analytics, chatbots for customer service, social media management, and optimized ad targeting. Tools like Jasper, MarketMuse, and Persado are specifically designed for marketing applications.",
    category: "Marketing"
  },
  {
    question: "Any tips on using AI to brainstorm fresh blog topics my competitors haven't covered yet?",
    answer: "You can prompt an AI with: 'List 10 unique blog post ideas around [your niche] that haven't been widely covered.' Then refine. To push it further, ask for angles that intersect with trending news or emerging tech. Combine that with a quick competitor content audit to confirm uniqueness.",
    category: "Marketing"
  },
  {
    question: "What's the best way to use ChatGPT for snappy social media captions?",
    answer: "Give it context—length constraints, platform, and your brand voice. For example: 'Write 5 Instagram captions for a sustainable fashion brand, each under 100 characters, with a mix of playful and thought-provoking tones.' Then pick your favorite or mix elements from different options.",
    category: "Marketing"
  },
  
  // Email Marketing FAQs
  {
    question: "How does AI improve email marketing performance?",
    answer: "Tools like Phrasee and Persado optimize subject lines, send times, and CTAs. AI-driven platforms like Klaviyo predict the best segments for campaigns.",
    category: "Email Marketing"
  },
  {
    question: "If I ask AI to generate daily emails, won't my list get annoyed or unsub?",
    answer: "It's not about the AI—it's about your sending frequency. If you're blasting daily emails without value, subscribers will leave regardless of who wrote them. Use AI to create quality content, but maintain a reasonable cadence. Let your engagement metrics guide frequency.",
    category: "Email Marketing"
  },
  
  // Analytics & Data FAQs
  {
    question: "What's the difference between standard marketing analytics and AI-driven analytics?",
    answer: "Standard analytics are descriptive (what happened) and sometimes diagnostic (why it happened). AI analytics add predictive (what will happen) and prescriptive (what you should do) capabilities. For example, standard analytics might show your conversion rate dropped; AI analytics could predict which segments are at risk and suggest personalized interventions.",
    category: "Analytics & Data"
  },
  {
    question: "I run a subscription box. Can AI pinpoint who's about to cancel so I can send a retention offer?",
    answer: "Yes, this is called churn prediction. AI analyzes behavior patterns (like decreased engagement, fewer logins, support tickets) to flag at-risk customers before they cancel. Platforms like Custify or Profitwell use these signals to create risk scores. You can then target the highest-risk segment with special offers or check-ins.",
    category: "Analytics & Data"
  },
  
  // Development FAQs
  {
    question: "What are GitHub Repos in the context of Nestor?",
    answer: "The GitHub Repos section of Nestor features curated lists of open-source AI projects hosted on GitHub. These repositories include LLMs, agent frameworks, tools, and applications that developers can use, contribute to, or learn from.",
    category: "Development"
  }
];
