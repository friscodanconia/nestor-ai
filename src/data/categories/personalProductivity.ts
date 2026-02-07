export interface ProductivityTool {
  name: string;
  description: string;
  url?: string;
  pricing?: string;
  researchNote?: string;
}

export interface ProductivitySection {
  title: string;
  description: string;
  tools?: ProductivityTool[];
}

export const personalProductivityData = {
  title: "Personal Productivity",
  gradientClasses: "bg-gradient-to-br from-blue-100 to-cyan-200",
  description: "AI productivity tools have gone from novelty to necessity. The best ones don't just organize your tasks — they think ahead, automate the mundane, and give you back hours every week. Here's what's actually worth using.",

  lastUpdated: "February 2026",

  sections: [
    {
      title: "The AI Productivity Stack",
      description: "The productivity tool landscape has shifted dramatically with AI. The key categories:\n\n- **AI assistants**: Claude, ChatGPT, and Gemini are the foundation — use them for drafting, research, analysis, and brainstorming\n- **Smart scheduling**: AI that auto-blocks your calendar based on priorities and energy levels\n- **Note-taking + knowledge**: Apps that connect ideas across notes and surface them when relevant\n- **Email management**: Tools that draft replies, prioritize inbox, and extract action items\n- **Writing + editing**: Beyond spell-check — AI that restructures, rewrites, and adapts tone\n\nThe biggest trap: installing 10 AI tools and spending more time managing tools than doing work. Pick 3-4 that cover your key needs and go deep."
    },
    {
      title: "AI Assistants (The Foundation)",
      description: "These are the Swiss Army knives of productivity. Use them daily for drafting, analysis, coding, research, and thinking through problems.",
      tools: [
        {
          name: "Claude (Anthropic)",
          url: "https://claude.ai/",
          description: "Excellent for long-form writing, analysis, and nuanced tasks. Strong at following complex instructions and maintaining context over long conversations. Claude Code for developers is a game-changer.",
          pricing: "Free / Pro $20/mo / Team $25/mo per user",
          researchNote: "My daily driver for writing, analysis, and coding. The artifact feature and Projects are particularly useful for ongoing work."
        },
        {
          name: "ChatGPT (OpenAI)",
          url: "https://chat.openai.com/",
          description: "The most popular AI assistant with excellent general knowledge. GPT-4o is fast and capable. Strong plugin ecosystem, image generation with DALL-E, and good at structured outputs.",
          pricing: "Free / Plus $20/mo / Pro $200/mo",
          researchNote: "Best ecosystem of integrations. The memory feature and custom GPTs are useful for recurring tasks."
        },
        {
          name: "Google Gemini",
          url: "https://gemini.google.com/",
          description: "Deep Google integration is the killer feature — works with Gmail, Docs, Drive, Calendar. Gemini Advanced with 2.0 Pro is strong for research and multimodal tasks.",
          pricing: "Free / Advanced $20/mo (included in Google One AI Premium)"
        },
        {
          name: "Perplexity",
          url: "https://www.perplexity.ai/",
          description: "AI-powered search that cites sources. Best for research queries where you need current, verified information. Pro Search mode does multi-step research automatically.",
          pricing: "Free / Pro $20/mo",
          researchNote: "Replaced Google for many of my research queries. The source citations make it trustworthy in a way other AI tools aren't."
        }
      ]
    },
    {
      title: "Smart Task Management & Scheduling",
      description: "AI scheduling tools auto-block time for tasks, protect focus time, and dynamically rearrange your day when priorities shift.",
      tools: [
        {
          name: "Motion",
          url: "https://www.usemotion.com/",
          description: "AI auto-schedules your tasks into your calendar based on priority, deadlines, and your preferences. Reschedules dynamically when things change. Feels like having a personal assistant managing your calendar.",
          pricing: "$19/mo individual / $12/mo per user for teams",
          researchNote: "The auto-scheduling is genuinely impressive. Best for people with many tasks competing for limited calendar slots. Can feel rigid if you prefer flexibility."
        },
        {
          name: "Reclaim.ai",
          url: "https://reclaim.ai/",
          description: "Smart calendar assistant that auto-finds time for habits, tasks, and meetings. Protects your focus time and lunch breaks. Great for balancing multiple calendars.",
          pricing: "Free (up to 3 habits) / Starter $8/mo / Business $12/mo",
          researchNote: "Best free tier in the category. The habit scheduling (exercise, lunch, 1:1s) is the standout feature."
        },
        {
          name: "Todoist",
          url: "https://todoist.com/",
          description: "Best pure task manager. Natural language input, smart scheduling suggestions, powerful filters. AI Assistant helps break down tasks and suggest due dates. Integrates with everything.",
          pricing: "Free / Pro $5/mo / Business $8/mo per user"
        },
        {
          name: "Linear",
          url: "https://linear.app/",
          description: "Beautifully designed project management for teams. Lightning fast. AI-powered triage, auto-categorization, and duplicate detection. The best tool for software teams.",
          pricing: "Free (up to 250 issues) / Standard $8/mo per user"
        }
      ]
    },
    {
      title: "AI Note-Taking & Knowledge Management",
      description: "The best note-taking apps now connect ideas across your entire knowledge base, auto-summarize meetings, and surface relevant context when you need it.",
      tools: [
        {
          name: "Notion AI",
          url: "https://www.notion.so/product/ai",
          description: "All-in-one workspace with powerful AI built in. Ask questions about your notes, auto-fill databases, generate summaries. The AI can work across your entire Notion workspace to find and synthesize information.",
          pricing: "Free / Plus $10/mo / AI add-on $10/mo per user",
          researchNote: "The workspace-wide Q&A is genuinely useful when you have a large knowledge base in Notion. The AI add-on is worth it if you use Notion daily."
        },
        {
          name: "Obsidian",
          url: "https://obsidian.md/",
          description: "Local-first, markdown-based notes with powerful linking. The graph view shows connections between ideas. Huge plugin ecosystem including AI plugins. Your data stays on your device.",
          pricing: "Free for personal use / Sync $4/mo / Publish $8/mo",
          researchNote: "Best for people who care about data ownership and want full control. The community plugins (including AI integrations) are incredibly rich."
        },
        {
          name: "Otter.ai",
          url: "https://otter.ai/",
          description: "Real-time meeting transcription with speaker identification. Auto-generates summaries and action items. Integrates with Zoom, Teams, and Google Meet. OtterPilot joins meetings for you.",
          pricing: "Free (300 min/mo) / Pro $16.99/mo / Business $30/mo per user"
        },
        {
          name: "Granola",
          url: "https://granola.ai/",
          description: "AI notepad for meetings. Listens to your meeting, then enhances your rough notes with full context from what was discussed. Feels like magic — you jot bullet points, it fills in the details.",
          pricing: "Free tier / Pro $10/mo",
          researchNote: "The approach is clever — it augments your notes rather than replacing them. Output quality is noticeably better than pure transcription tools."
        }
      ]
    },
    {
      title: "Email & Communication",
      description: "AI email tools draft replies, prioritize your inbox, and extract action items so you spend less time in email.",
      tools: [
        {
          name: "Superhuman",
          url: "https://superhuman.com/",
          description: "Premium email client with AI-powered triage, one-click replies, and blazing speed. AI drafts replies matching your voice. Split Inbox auto-categorizes. Keyboard-first design.",
          pricing: "$30/mo",
          researchNote: "Expensive but saves 3-4 hours per week for heavy email users. The AI reply drafts are surprisingly good at matching your writing style."
        },
        {
          name: "Spark Mail",
          url: "https://sparkmailapp.com/",
          description: "Smart email client with AI writing assistant, smart inbox prioritization, and team collaboration features. Cross-platform (iOS, Mac, Android, Windows).",
          pricing: "Free / Premium $4.99/mo / Teams from $7.99/mo per user"
        },
        {
          name: "SaneBox",
          url: "https://www.sanebox.com/",
          description: "AI email filtering that works with any email provider. Learns what's important to you and moves everything else out of your inbox. SaneBlackHole for permanent unsubscribe.",
          pricing: "Snack $3.49/mo / Lunch $5.99/mo / Dinner $16.99/mo"
        }
      ]
    },
    {
      title: "AI Writing & Editing",
      description: "Beyond the general AI assistants, these tools are purpose-built for writing improvement.",
      tools: [
        {
          name: "Grammarly",
          url: "https://www.grammarly.com/",
          description: "The standard for writing assistance. Goes beyond grammar to suggest clarity, tone, and style improvements. Works everywhere — browser, desktop apps, mobile. Enterprise version learns your company's style guide.",
          pricing: "Free / Premium $12/mo / Business $15/mo per user"
        },
        {
          name: "Hemingway Editor",
          url: "https://hemingwayapp.com/",
          description: "Makes your writing bold and clear. Highlights complex sentences, passive voice, and hard-to-read passages. Now has AI rewrite suggestions. Simple but effective.",
          pricing: "Free (web) / Desktop $19.99 one-time"
        },
        {
          name: "Wordtune",
          url: "https://www.wordtune.com/",
          description: "AI-powered rewriting tool. Highlights sentences and suggests alternative phrasings — more formal, more casual, shorter, longer. Great for non-native English speakers.",
          pricing: "Free (limited) / Plus $13.99/mo"
        }
      ]
    },
    {
      title: "Getting Started Recommendations",
      description: "**The minimal AI productivity stack (3 tools):**\n1. One AI assistant: **Claude** or **ChatGPT** for daily thinking partner\n2. **Todoist** for task management (or **Motion** if you want AI scheduling)\n3. **Notion** for notes and knowledge management\n\n**For meeting-heavy schedules, add:**\n- **Otter.ai** or **Granola** for meeting notes\n- **Reclaim.ai** to protect your focus time\n\n**For email overload, add:**\n- **Superhuman** if you can justify $30/mo\n- **SaneBox** for a cheaper option that works with any email\n\n**Principles that matter more than tools:**\n- Time-block your day — AI can help schedule but you set the priorities\n- Capture everything in one place, not five apps\n- Review weekly — tools help but the habit of reviewing is what drives productivity\n- Don't automate what you should eliminate"
    }
  ]
};
