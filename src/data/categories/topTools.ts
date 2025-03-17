export interface Tool {
  name: string;
  url: string;
  description?: string;
  personalExperience?: string;
  type?: string;
}

export interface Category {
  title: string;
  description?: string;
  tools?: Tool[];
  others?: {
    description: string;
    tools: Tool[];
  };
  additionalInfo?: string;
  personalExperience?: string;
  freepikUrl?: string;
}

export const topToolsData: { 
  title: string; 
  gradientClasses: string; 
  description: string; 
  categories: Category[] 
} = {
  title: "Top Tools",
  gradientClasses: "bg-gradient-to-br from-blue-200 to-purple-200",
  description: "AI tools are everywhere these days - and it can get overwhelming to pick the right ones. We're focusing on tools for regular users like us, since enterprises need different things (like security certifications, user management, and API access). Whether you're looking for free tools to play around with or affordable premium options, there's something for everyone. We've spent countless hours testing these tools ourselves, and here's our honest take on the ones that actually deliver results. Since AI moves fast, we'll keep this guide fresh with new finds and updates.",
  
  categories: [
    {
      title: "General Purpose AI assistants",
      tools: [
        {
          name: "ChatGPT",
          url: "https://openai.com/chatgpt",
          description: "versatile assistant, helps with writing, coding, brainstorming, problem solving. Three plans: free (basic features), Plus ($20/month), and Pro ($200/month).",
          personalExperience: "I use the Plus plan. While I tried Pro, I didn't find enough extra value to justify the higher cost."
        },
        {
          name: "Claude",
          url: "https://claude.ai",
          description: "excels in a lot of general purpose tools, manages long documents well and is really good at coding. It does run into token limits both for free and paid plans. Paid plan is $20/month.",
          personalExperience: "My go-to tool, I use the Pro Plan and absolutely love it."
        }
      ],
      others: {
        description: "I have also tried other assistants and have included them here, please feel free to try them out.",
        tools: [
          { name: "Google Gemini", url: "https://gemini.google.com" },
          { name: "Deepseek", url: "https://deepseek.ai" },
          { name: "Mistral", url: "https://chat.mistral.ai" },
          { name: "Llama", url: "https://meta.ai" },
          { name: "Grok", url: "https://x.ai" }
        ]
      }
    },
    {
      title: "Search Assistant",
      tools: [
        {
          name: "Perplexity",
          url: "https://perplexity.ai",
          description: "all purpose product that combines search with conversational ability of chatbot. It has free and paid plans, introduces new features regularly and has Deepseek, OpenAI models integrated in it. Native app available for iOS, Android, Mac, and web.",
          personalExperience: "My most used app across devices, I don't remember the last time I went to google."
        }
      ]
    },
    {
      title: "Generative Art and Video",
      description: "Gen AI has revolutionized visual arts and video production. Text-to-image models like DALL-E create stunning visuals from written descriptions, while text-to-video tools generate short clips from prompts. Image-to-video AI animates still photos, and video-to-video technology alters existing footage.",
      tools: [
        { name: "Midjourney", url: "https://midjourney.com" },
        { name: "DALL-E", url: "https://openai.com/dall-e-3" },
        { name: "Runway", url: "https://runwayml.com" },
        { name: "Lensa", url: "https://prisma-ai.com/lensa" },
        { name: "Hailuoai", url: "https://hailuoai.video" },
        { name: "Klingai", url: "https://www.klingai.com" }
      ],
      additionalInfo: "While these are great tools for experimentation, I have struggled to get consistent outputs out of them.",
      personalExperience: "I have tried and found Freepik AI suite to be most friendly with lot of features and functionalities.",
      freepikUrl: "https://freepik.com"
    },
    {
      title: "Website and App Builders",
      tools: [
        { name: "Wix", url: "https://wix.com", type: "drag-and-drop" },
        { name: "10Web", url: "https://10web.io", description: "AI-powered website builder that can recreate any website design" },
        { name: "V0", url: "https://v0.dev", description: "generates code for components and entire pages from text descriptions" }
      ]
    },
    {
      title: "Audio Assistants",
      description: "Audio AI apps have revolutionized sound creation and interaction. They generate realistic voices, compose music, and convert documents to audio.",
      tools: [
        { name: "Murf AI", url: "https://murf.ai", description: "create voiceovers" },
        { name: "Suno", url: "https://www.suno.ai", description: "composes songs" },
        { name: "Notebook LM", url: "https://notebooklm.google.com", description: "turns documents into podcasts" },
        { name: "Eleven Labs", url: "https://elevenlabs.io", description: "can clone voices and generate hyper-realistic speech in multiple languages" }
      ],
      additionalInfo: "These user-friendly tools enable anyone to produce professional-sounding audio content for various purposes.",
      personalExperience: "I like Notebook LM from Google, where I enter a document (pdf, word doc), convert into a podcast and listen to it on my walks."
    }
  ]
};
