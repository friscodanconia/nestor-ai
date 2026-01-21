export interface Tool {
  name: string;
  url: string;
  description?: string;
  personalExperience?: string;
  type?: string;
  pricing?: string;
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
  lastUpdated: string;
  categories: Category[] 
} = {
  title: "Top Tools",
  gradientClasses: "bg-gradient-to-br from-blue-200 to-purple-200",
  description: "AI tools are everywhere - and it can get overwhelming. We focus on tools for regular users, not enterprises. Whether you're looking for free tools or affordable premium options, here's our honest take on tools that actually deliver. Since AI moves fast, we keep this fresh.",
  lastUpdated: "January 2026",
  
  categories: [
    {
      title: "General Purpose AI Assistants",
      tools: [
        {
          name: "ChatGPT",
          url: "https://chatgpt.com",
          description: "Still the dominant player with 400M+ weekly users. GPT-4o is the default model, with o1 for complex reasoning. Projects feature lets you organize conversations.",
          pricing: "Free (GPT-4o limited), Plus $20/mo, Pro $200/mo",
          personalExperience: "I use Plus. Pro wasn't worth the premium for my use cases."
        },
        {
          name: "Claude",
          url: "https://claude.ai",
          description: "My go-to for coding and long documents. Claude 3.5 Sonnet is exceptional for code. Projects feature, Artifacts for previews, and MCP support make it powerful.",
          pricing: "Free (limited), Pro $20/mo",
          personalExperience: "My primary tool. The Projects feature with custom instructions is invaluable."
        },
        {
          name: "Gemini",
          url: "https://gemini.google.com",
          description: "Google's flagship AI. Deep Google Workspace integration, excellent for research with real-time web access. Gemini 2.0 Flash is fast and capable.",
          pricing: "Free, Advanced $20/mo (includes 2TB Drive)"
        }
      ],
      others: {
        description: "Other capable assistants worth trying:",
        tools: [
          { name: "Deepseek", url: "https://chat.deepseek.com", description: "Chinese model, excellent reasoning, very cost-effective API" },
          { name: "Mistral Le Chat", url: "https://chat.mistral.ai", description: "European alternative, strong multilingual" },
          { name: "Llama (Meta AI)", url: "https://meta.ai", description: "Meta's assistant, integrated in WhatsApp/Instagram" },
          { name: "Grok", url: "https://x.ai", description: "X/Twitter integrated, real-time info, uncensored" },
          { name: "Pi", url: "https://pi.ai", description: "Conversational and empathetic, great for casual chat" }
        ]
      }
    },
    {
      title: "Search + AI",
      tools: [
        {
          name: "Perplexity",
          url: "https://perplexity.ai",
          description: "AI-powered search that actually cites sources. Spaces for research organization. Pro Search for complex queries. Has Deepseek, Claude, GPT models built-in.",
          pricing: "Free, Pro $20/mo",
          personalExperience: "My most used app. Haven't Googled anything in months. The mobile app is excellent."
        },
        {
          name: "You.com",
          url: "https://you.com",
          description: "AI search with multiple modes - Smart (balanced), Genius (deep research), Create (writing). Good privacy focus.",
          pricing: "Free, Pro $15/mo"
        },
        {
          name: "Kagi",
          url: "https://kagi.com",
          description: "Premium search engine with AI summaries. No ads, no tracking. Integrates with multiple AI models.",
          pricing: "Starter $5/mo, Professional $10/mo"
        }
      ]
    },
    {
      title: "Coding Assistants",
      tools: [
        {
          name: "Cursor",
          url: "https://cursor.com",
          description: "AI-first code editor built on VS Code. Composer for multi-file edits, Agent mode for autonomous coding. The best IDE for AI-assisted development.",
          pricing: "Free (limited), Pro $20/mo",
          personalExperience: "This is how I build all my projects now. Agent mode is game-changing."
        },
        {
          name: "GitHub Copilot",
          url: "https://github.com/features/copilot",
          description: "AI pair programmer in your IDE. Copilot Chat for conversations, code explanations, and generation. Works in VS Code, JetBrains, Neovim.",
          pricing: "Individual $10/mo, Business $19/mo"
        },
        {
          name: "Windsurf",
          url: "https://codeium.com/windsurf",
          description: "Free AI IDE from Codeium. Cascade for agentic coding, Flow for understanding context. Good free alternative to Cursor.",
          pricing: "Free (generous), Pro $15/mo"
        },
        {
          name: "Replit",
          url: "https://replit.com",
          description: "Browser-based IDE with AI assistant. Great for quick prototypes and learning. Deployments included.",
          pricing: "Free, Replit Core $25/mo"
        }
      ]
    },
    {
      title: "No-Code App Builders",
      tools: [
        {
          name: "Bolt.new",
          url: "https://bolt.new",
          description: "Describe what you want, get a working app. Full-stack apps from prompts. Uses Claude/GPT under the hood. Deploy to Netlify.",
          pricing: "Free (limited), Pro $20/mo",
          personalExperience: "My go-to for quick prototypes. Describe a website, paste an image - it builds it."
        },
        {
          name: "v0.dev",
          url: "https://v0.dev",
          description: "Vercel's AI UI generator. Creates React components from descriptions. Outputs clean, production-ready code with Tailwind.",
          pricing: "Free (limited), Premium $20/mo"
        },
        {
          name: "Lovable",
          url: "https://lovable.dev",
          description: "Build full-stack apps with AI. Supabase integration for backend. Good for MVPs and prototypes.",
          pricing: "Free (limited), Pro $25/mo"
        }
      ]
    },
    {
      title: "Image Generation",
      tools: [
        {
          name: "Midjourney",
          url: "https://midjourney.com",
          description: "Still the gold standard for artistic image generation. V6 has excellent prompt understanding and photorealism. Discord-based but web UI coming.",
          pricing: "Basic $10/mo, Standard $30/mo"
        },
        {
          name: "DALL-E 3",
          url: "https://openai.com/dall-e-3",
          description: "OpenAI's image generator, built into ChatGPT. Excellent at following complex prompts and text rendering.",
          pricing: "Included with ChatGPT Plus"
        },
        {
          name: "Ideogram",
          url: "https://ideogram.ai",
          description: "Best-in-class text rendering in images. Great for logos, posters, and anything with typography.",
          pricing: "Free (limited), Basic $8/mo"
        },
        {
          name: "Flux",
          url: "https://flux.ai",
          description: "Open-source model from Black Forest Labs. Flux Pro rivals Midjourney. Available through various interfaces.",
          pricing: "Varies by platform"
        }
      ],
      personalExperience: "For consistent outputs, I use Freepik's AI suite - lots of features in one place.",
      freepikUrl: "https://freepik.com"
    },
    {
      title: "Video Generation",
      tools: [
        {
          name: "Runway Gen-3",
          url: "https://runwayml.com",
          description: "Industry-leading text-to-video. Gen-3 Alpha produces cinematic quality. Motion brush for precise control.",
          pricing: "Free trial, Standard $15/mo"
        },
        {
          name: "Kling AI",
          url: "https://klingai.com",
          description: "Chinese video model, excellent quality and longer outputs (up to 2 min). Free tier is generous.",
          pricing: "Free (generous), Pro plans available"
        },
        {
          name: "Luma Dream Machine",
          url: "https://lumalabs.ai/dream-machine",
          description: "Fast video generation with good quality. Image-to-video is particularly strong.",
          pricing: "Free (limited), Standard $24/mo"
        },
        {
          name: "Pika",
          url: "https://pika.art",
          description: "Fun, creative video generation. Good for short clips and effects. Easy to use.",
          pricing: "Free (limited), Standard $10/mo"
        }
      ]
    },
    {
      title: "Audio & Voice",
      tools: [
        {
          name: "ElevenLabs",
          url: "https://elevenlabs.io",
          description: "Best text-to-speech quality. Voice cloning, dubbing, sound effects. Powers many AI apps.",
          pricing: "Free (limited), Starter $5/mo",
          personalExperience: "Remarkably realistic voices. Use it for video narration."
        },
        {
          name: "NotebookLM",
          url: "https://notebooklm.google.com",
          description: "Upload documents, get an AI-generated podcast discussion about them. Mind-blowing for learning.",
          pricing: "Free",
          personalExperience: "I upload PDFs and listen to the generated podcast on walks. Brilliant for absorbing information."
        },
        {
          name: "Suno",
          url: "https://suno.ai",
          description: "Generate full songs from text descriptions. Surprisingly good quality vocals and instruments.",
          pricing: "Free (limited), Pro $10/mo"
        }
      ]
    },
    {
      title: "Writing & Content",
      tools: [
        {
          name: "Grammarly",
          url: "https://grammarly.com",
          description: "Writing assistant for grammar, style, and tone. Works everywhere via browser extension. AI features for rewriting.",
          pricing: "Free, Premium $12/mo"
        },
        {
          name: "Jasper",
          url: "https://jasper.ai",
          description: "AI content platform for marketing teams. Brand voice, templates, team collaboration.",
          pricing: "Creator $49/mo, Pro $69/mo"
        },
        {
          name: "Copy.ai",
          url: "https://copy.ai",
          description: "AI copywriting for marketing. Blog posts, ads, emails. Good template library.",
          pricing: "Free (limited), Pro $49/mo"
        }
      ]
    }
  ]
};
