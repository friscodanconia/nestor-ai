export interface App {
  name: string;
  url: string;
  description: string;
}

export interface AppSection {
  title: string;
  description?: string;
  apps: App[];
}

export const appsData = {
  title: "Apps",
  gradientClasses: "bg-gradient-to-br from-pink-200 to-rose-200",
  description: "The AI landscape evolves at breakneck speed, with new models and applications emerging weekly. Rather than attempting the impossible task of cataloging everything, we've created this carefully curated selection of the most impactful AI tools and developments.",
  
  lastUpdated: "February 25, 2025",
  contactEmail: "nestorguide@gmail.com",
  
  whatToExpect: {
    items: [
      "Regular updates: This guide is refreshed bi-weekly",
      "Focus on quality: We prioritize tools with practical applications over novelty",
      "Historical archive: Retired entries move to our comprehensive archive section below"
    ]
  },
  
  sections: [
    {
      title: "ChatGPT",
      apps: [
        {
          name: "ChatGPT",
          url: "https://chat.openai.com",
          description: "The most dominant product so far with 400M users on a weekly basis. Free to use, but a lot of powerful features are gated behind subscriptions."
        }
      ]
    },
    {
      title: "Claude",
      apps: [
        {
          name: "Claude",
          url: "https://claude.ai",
          description: "This is my personal favorite model for coding. Now, I am a novice coder, so take my advice with a pinch of salt. But veteran programmers swear by it, so maybe there is some truth here. It is also great for writing and allows for some cool things like Model Context Protocol (MCP, will cover in detail in other sections)."
        }
      ]
    },
    {
      title: "Bolt.new",
      apps: [
        {
          name: "Bolt.new",
          url: "https://bolt.new",
          description: "is my go-to tool for building quick prototypes. You can describe what you want to build (app, website) in natural language, or even copy and paste the image of a website that you want it to build, and it will write the code for you. For non-coders, it is a fantastic product."
        }
      ]
    },
    {
      title: "Replit",
      apps: [
        {
          name: "Replit",
          url: "https://replit.com",
          description: "is an online IDE that allows you to code in 50+ languages, host, and deploy apps. It has a great AI assistant called Ghostwriter, which is fantastic for coding. It has a free tier, and the paid tier is $10/month."
        }
      ]
    },
    {
      title: "Replika",
      apps: [
        {
          name: "Replika",
          url: "https://replika.ai",
          description: "An AI companion app that you can chat, talk, or even have video calls with. It is an interesting experience and can see it getting more popularity (already has 200K+ reviews)."
        }
      ]
    },
    {
      title: "Other AI Assistants",
      apps: [
        {
          name: "Grok",
          url: "https://x.ai",
          description: "Honorable mention"
        },
        {
          name: "Claude",
          url: "https://claude.ai",
          description: "Honorable mention"
        },
        {
          name: "Character.ai",
          url: "https://character.ai",
          description: "Honorable mention"
        }
      ]
    },
    {
      title: "Perplexity",
      apps: [
        {
          name: "Perplexity",
          url: "https://perplexity.ai",
          description: "This is now my go-to search tool; they iterate super fast and add great features. If you want to pay for one subscription ($20/month), this is one to get. They have also integrated Deepseek without censorship under their hood. I don't remember last time I used Google to look for anything."
        }
      ]
    },
    {
      title: "Grammarly",
      apps: [
        {
          name: "Grammarly",
          url: "https://grammarly.com",
          description: "is a really great tool, which is a writing assistant that can check your grammar, style suggestions, and many other use cases."
        }
      ]
    },
    {
      title: "QuillBot",
      apps: [
        {
          name: "QuillBot",
          url: "https://quillbot.com",
          description: "is a paraphrasing tool that can help you rewrite sentences, paragraphs, or even entire articles. It has a free tier and a paid tier ($9.95/month)."
        }
      ]
    }
  ]
};
