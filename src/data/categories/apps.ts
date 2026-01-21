export interface App {
  name: string;
  url: string;
  description: string;
  pricing?: string;
  personalNote?: string;
}

export interface AppSection {
  title: string;
  description?: string;
  apps: App[];
}

export const appsData = {
  title: "Apps",
  gradientClasses: "bg-gradient-to-br from-pink-200 to-rose-200",
  description: "The AI landscape evolves weekly with new tools and capabilities. Rather than cataloging everything, we've curated the most impactful AI apps - the ones we actually use and recommend.",
  
  lastUpdated: "January 2026",
  contactEmail: "nestorguide@gmail.com",
  
  whatToExpect: {
    items: [
      "Regular updates: This guide is refreshed bi-weekly",
      "Focus on quality: We prioritize tools with practical applications",
      "Personal experience: Tools we've actually tested and used"
    ]
  },
  
  sections: [
    {
      title: "Daily Drivers",
      description: "The AI apps we use every single day",
      apps: [
        {
          name: "ChatGPT",
          url: "https://chatgpt.com",
          description: "400M+ weekly users. GPT-4o handles most tasks, o1 for complex reasoning. Projects feature organizes work. Canvas for writing/coding. Voice mode for conversations.",
          pricing: "Free / Plus $20/mo / Pro $200/mo",
          personalNote: "I use Plus daily. The Projects feature with custom instructions is invaluable for recurring tasks."
        },
        {
          name: "Claude",
          url: "https://claude.ai",
          description: "My favorite for coding and long-form content. Claude 3.5 Sonnet is exceptional. Artifacts for live previews, Projects for context, MCP for tool integration.",
          pricing: "Free (limited) / Pro $20/mo",
          personalNote: "This is my primary coding assistant. The code quality is consistently excellent."
        },
        {
          name: "Perplexity",
          url: "https://perplexity.ai",
          description: "AI-powered search with citations. Pro Search for deep research. Spaces for organizing research. Multiple AI models available. Mobile app is excellent.",
          pricing: "Free / Pro $20/mo",
          personalNote: "Haven't used Google for general search in months. This is always open on my phone."
        }
      ]
    },
    {
      title: "Coding & Building",
      description: "Tools for building apps and writing code",
      apps: [
        {
          name: "Cursor",
          url: "https://cursor.com",
          description: "AI-native code editor. Composer for multi-file edits, Agent mode for autonomous coding. Built on VS Code, so familiar interface.",
          pricing: "Free (limited) / Pro $20/mo",
          personalNote: "This is how I build everything now. Agent mode handles entire features autonomously."
        },
        {
          name: "Bolt.new",
          url: "https://bolt.new",
          description: "Describe what you want, get a full-stack app. Uses Claude under the hood. Great for prototypes. Deploy directly to Netlify.",
          pricing: "Free (limited) / Pro $20/mo",
          personalNote: "My go-to for quick prototypes. Paste an image of a design, it builds it."
        },
        {
          name: "Replit",
          url: "https://replit.com",
          description: "Browser-based IDE with AI assistant. Write code in 50+ languages, host, and deploy. Great for learning and quick projects.",
          pricing: "Free / Core $25/mo"
        },
        {
          name: "v0.dev",
          url: "https://v0.dev",
          description: "Vercel's AI component generator. Describe a UI, get production-ready React/Tailwind code. Excellent for frontend work.",
          pricing: "Free (limited) / Premium $20/mo"
        }
      ]
    },
    {
      title: "Writing & Content",
      description: "AI-powered writing assistants",
      apps: [
        {
          name: "Grammarly",
          url: "https://grammarly.com",
          description: "Grammar, style, and tone suggestions. Works everywhere via browser extension. AI features for rewriting and improving text.",
          pricing: "Free / Premium $12/mo"
        },
        {
          name: "Notion AI",
          url: "https://notion.so",
          description: "AI integrated into Notion. Summarize pages, generate content, answer questions about your workspace. Seamless integration.",
          pricing: "Add-on $10/mo per member"
        },
        {
          name: "Lex",
          url: "https://lex.page",
          description: "AI-powered writing app. Clean interface, helpful suggestions without being intrusive. Good for long-form writing.",
          pricing: "Free"
        }
      ]
    },
    {
      title: "Creative & Media",
      description: "AI for images, video, and audio",
      apps: [
        {
          name: "Midjourney",
          url: "https://midjourney.com",
          description: "Gold standard for AI art. V6 has excellent photorealism and prompt understanding. Discord-based workflow.",
          pricing: "Basic $10/mo / Standard $30/mo"
        },
        {
          name: "ElevenLabs",
          url: "https://elevenlabs.io",
          description: "Best-in-class text-to-speech. Voice cloning, dubbing, sound effects. Remarkably realistic.",
          pricing: "Free (limited) / Starter $5/mo"
        },
        {
          name: "Runway",
          url: "https://runwayml.com",
          description: "AI video generation and editing. Gen-3 produces cinematic quality. Motion brush for control.",
          pricing: "Free trial / Standard $15/mo"
        },
        {
          name: "NotebookLM",
          url: "https://notebooklm.google.com",
          description: "Upload documents, get an AI-generated podcast about them. Game-changer for consuming long content.",
          pricing: "Free",
          personalNote: "Upload PDFs, listen to generated discussions on walks. Brilliant for learning."
        }
      ]
    },
    {
      title: "Research & Learning",
      description: "AI for understanding and discovery",
      apps: [
        {
          name: "Elicit",
          url: "https://elicit.org",
          description: "AI research assistant. Search academic papers, extract findings, synthesize research. Great for literature reviews.",
          pricing: "Free (limited) / Plus $10/mo"
        },
        {
          name: "Consensus",
          url: "https://consensus.app",
          description: "AI-powered search for scientific research. Ask questions, get answers backed by papers.",
          pricing: "Free (limited) / Premium $10/mo"
        },
        {
          name: "Scholarcy",
          url: "https://scholarcy.com",
          description: "AI that reads and summarizes research papers. Creates flashcards and extracts key findings.",
          pricing: "Free (limited) / Premium $10/mo"
        }
      ]
    },
    {
      title: "Productivity & Organization",
      description: "AI to get things done",
      apps: [
        {
          name: "Reclaim.ai",
          url: "https://reclaim.ai",
          description: "AI calendar assistant. Automatically schedules habits, meetings, and focus time. Integrates with Google Calendar.",
          pricing: "Free (limited) / Starter $10/mo"
        },
        {
          name: "Otter.ai",
          url: "https://otter.ai",
          description: "AI meeting assistant. Real-time transcription, summaries, and action items. Works with Zoom, Meet, Teams.",
          pricing: "Free (limited) / Pro $17/mo"
        },
        {
          name: "Granola",
          url: "https://granola.ai",
          description: "AI notepad for meetings. Take minimal notes, AI fills in the rest from transcript. Mac-only currently.",
          pricing: "Free (beta)"
        }
      ]
    },
    {
      title: "Companions & Chat",
      description: "AI for conversation and companionship",
      apps: [
        {
          name: "Pi",
          url: "https://pi.ai",
          description: "Personal AI from Inflection. Conversational, empathetic, remembers context. Great voice mode.",
          pricing: "Free"
        },
        {
          name: "Character.ai",
          url: "https://character.ai",
          description: "Chat with AI characters. Create your own or chat with existing ones. Popular with younger users.",
          pricing: "Free / Plus $10/mo"
        },
        {
          name: "Replika",
          url: "https://replika.ai",
          description: "AI companion for chat, calls, or video. Learns your personality over time.",
          pricing: "Free / Pro $20/mo"
        }
      ]
    }
  ]
};
