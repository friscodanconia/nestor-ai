import { ReactNode } from 'react';

export interface AgentExample {
  title: string;
  url: string;
  description: string;
}

export interface AgentType {
  title: string;
  description: string;
  examples: {
    name: string;
    url: string;
  }[];
  autonomyLevel: string;
  useCase: string;
}

export interface GettingStartedStep {
  title: string;
  description?: string;
  examples?: {
    name: string;
    url: string;
    description?: string;
  }[];
  tips?: string[];
}

export interface ToolCategory {
  title: string;
  tools: {
    name: string;
    url: string;
    description: string;
  }[];
}

export interface PrebuiltAgentCategory {
  title: string;
  agents: {
    name: string;
    url: string;
    description: string;
  }[];
}

export const agentsData = {
  title: "Agents",
  gradientClasses: "bg-gradient-to-br from-green-200 to-emerald-200",
  description: "Everyone's talking about AI agents - but what exactly are they? Simply put, they're smart software programs that can work on their own to get things done, making decisions and taking actions just like a personal assistant would.",
  
  // What makes them special section
  specialFeatures: {
    description: "While many apps use AI, not all are true \"agents.\" What sets agents apart is their autonomy - they can work across multiple tools and figure out the steps needed to complete your tasks. They understand context, learn from experience, and actively work toward your goals without needing step-by-step instructions.",
    examples: [
      {
        title: "Book a restaurant for dinner",
        url: "https://www.loom.com/share/c4c00d22fbde43e88899dc93ae83066a",
        description: "An agent can check your calendar, find nearby eateries, compare reviews, and make a reservation—all with minimal input from you."
      },
      {
        title: "Shop at Amazon more efficiently",
        url: "https://www.loom.com/share/acfd836b9f2c4948b971349e960d6330?sid=9b9f08dd-7a1b-4444-932f-a5fe11fc24d5",
        description: "An agent can remember your previous purchases, search for best deals, and even add items to your cart when you run low."
      }
    ]
  },
  
  // Types of Agents section
  agentTypes: [
    {
      title: "Chat-Based Agents",
      description: "Interact via text (or sometimes voice) to answer questions or draft content.",
      examples: [
        { name: "ChatGPT", url: "https://chat.openai.com" },
        { name: "Pi by Inflection AI", url: "https://pi.ai" }
      ],
      autonomyLevel: "Low to Moderate (They respond to your prompts but won't usually initiate tasks on their own.)",
      useCase: "Quick Q&A, writing assistance, brainstorming ideas."
    },
    {
      title: "Voice Assistants",
      description: "Hands-free helpers triggered by spoken commands.",
      examples: [
        { name: "Siri", url: "https://www.apple.com/siri/" },
        { name: "Alexa", url: "https://alexa.amazon.com/" },
        { name: "Google Assistant", url: "https://assistant.google.com" }
      ],
      autonomyLevel: "Mostly Low (They integrate services but largely wait for user commands.)",
      useCase: "Simple tasks like timers, reminders, and smart home control."
    },
    {
      title: "Task/Workflow Agents",
      description: "Automate multi-step processes (e.g., sorting emails, scheduling).",
      examples: [
        { name: "Zapier", url: "https://zapier.com" },
        { name: "Auto-GPT", url: "https://github.com/Significant-Gravitas/Auto-GPT" }
      ],
      autonomyLevel: "Variable (Basic automations run in the background; advanced setups can plan and execute tasks with minimal user input.)",
      useCase: "Busy professionals who want \"set-it-and-forget-it\" automation across apps."
    },
    {
      title: "Knowledge-Centric Agents",
      description: "Index and analyze your data (docs, notes) to surface insights—even without direct prompts.",
      examples: [
        { name: "Notebook LM", url: "https://notebooklm.google.com" },
        { name: "Granola", url: "https://granola.ai" }
      ],
      autonomyLevel: "Higher (They proactively learn from your data and can offer relevant info on their own.)",
      useCase: "Heavy document management or research, where proactive AI support is essential."
    }
  ],
  
  // Getting Started section
  gettingStarted: [
    {
      title: "Try No-Code Tools",
      description: "Why: Quickly build simple AI automations without coding.",
      examples: [
        { 
          name: "Zapier", 
          url: "https://zapier.com",
          description: "Automate tasks (e.g., auto-save email attachments to Google Drive)."
        },
        { 
          name: "Make", 
          url: "https://make.com",
          description: "Automate tasks (e.g., auto-save email attachments to Google Drive)."
        },
        { 
          name: "Proxy Convergence", 
          url: "https://proxyconvergence.com",
          description: "An AI platform that helps unify financial/shopping data and can be connected to other apps with minimal setup."
        }
      ],
      tips: ["Add an AI API (like OpenAI) to handle text-based tasks (summaries, recommendations)."]
    },
    {
      title: "Use a Ready-Made AI Platform",
      examples: [
        { 
          name: "Abacus.AI", 
          url: "https://abacus.ai",
          description: "I built a \"Topic Research\" agent where you can enter a company name and it will give information about other companies in the industry, both private and public companies - a service for which you would pay subscription fees currently."
        },
        { 
          name: "Personal.ai", 
          url: "https://personal.ai",
          description: "Ideal for more autonomous behavior (multi-step tasks or personalized assistance)."
        },
        { 
          name: "AgentGPT", 
          url: "https://agentgpt.reworkd.ai",
          description: "Ideal for more autonomous behavior (multi-step tasks or personalized assistance)."
        }
      ]
    },
    {
      title: "Explore Developer Frameworks",
      examples: [
        { 
          name: "LangChain", 
          url: "https://www.langchain.com",
          description: "Chains prompts/tools for complex LLM workflows; best for Python-savvy users."
        },
        { 
          name: "Auto-GPT", 
          url: "https://agpt.co",
          description: "Shows how GPT can plan and execute multi-step goals on its own."
        }
      ]
    },
    {
      title: "Check Out Public Agents",
      examples: [
        { 
          name: "Github", 
          url: "https://github.com/Shubhamsaboo/awesome-llm-apps",
          description: "Here is a collection of agents that you can find on Github where you find code, snippets, implementation examples."
        },
        { 
          name: "Auto GPT", 
          url: "https://agpt.co",
          description: "You can also search Auto GPT to see what is getting built."
        }
      ]
    },
    {
      title: "Start Small, Then Iterate",
      tips: [
        "Automate a simple routine first (like summarizing emails).",
        "Add more features or data sources over time.",
        "Focus on privacy: always confirm where data is stored or shared."
      ]
    }
  ],
  
  // What tools can you use section
  toolCategories: [
    {
      title: "Development Frameworks",
      tools: [
        {
          name: "LangChain",
          url: "https://www.langchain.com",
          description: "Popular framework for building LLM applications with built-in agent capabilities."
        },
        {
          name: "LlamaIndex",
          url: "https://llamaindex.ai",
          description: "Framework focused on connecting LLMs with external data sources."
        },
        {
          name: "CrewAI",
          url: "https://www.crewai.io/",
          description: "Framework for orchestrating role-playing autonomous AI agents."
        }
      ]
    },
    {
      title: "Agent Platforms",
      tools: [
        {
          name: "AgentGPT",
          url: "https://agentgpt.reworkd.ai",
          description: "Open-source platform for creating and deploying autonomous AI agents."
        },
        {
          name: "E2B",
          url: "https://e2b.dev",
          description: "Infrastructure for running AI agents in secure sandboxed environments."
        },
        {
          name: "Fixie",
          url: "https://fixie.ai",
          description: "Platform for building and deploying AI agents with API access."
        }
      ]
    },
    {
      title: "APIs and Models",
      tools: [
        {
          name: "OpenAI Function Calling",
          url: "https://openai.com/blog/function-calling-and-other-api-updates",
          description: "Enables LLMs to call functions and use tools."
        },
        {
          name: "Claude",
          url: "https://www.anthropic.com/claude",
          description: "Alternative LLM with strong reasoning capabilities for agent systems."
        },
        {
          name: "Hugging Face",
          url: "https://huggingface.co",
          description: "Repository of open-source models that can be used for agent development."
        }
      ]
    }
  ],
  
  // Sample Prebuilt Agents section
  prebuiltAgentCategories: [
    {
      title: "Personal Assistants",
      agents: [
        {
          name: "Google Search",
          url: "https://www.google.com/search?q=personal+assistant+apps",
          description: "Find a list of popular personal assistant apps."
        },
        {
          name: "Any.do",
          url: "https://www.any.do",
          description: "Task management and personal assistant app."
        },
        {
          name: "Todoist",
          url: "https://www.todoist.com",
          description: "Task management and personal assistant app."
        }
      ]
    },
    {
      title: "Virtual Event Assistants",
      agents: [
        {
          name: "Event.ai",
          url: "https://www.event.ai",
          description: "AI-powered event assistant for event planning and management."
        },
        {
          name: "Hubilo",
          url: "https://www.hubilo.com",
          description: "Virtual event platform with AI-powered event assistant."
        },
        {
          name: "Whova",
          url: "https://www.whova.com",
          description: "Event management platform with AI-powered event assistant."
        }
      ]
    },
    {
      title: "Customer Support Agents",
      agents: [
        {
          name: "Freshdesk",
          url: "https://www.freshdesk.com",
          description: "Customer support software with AI-powered support agents."
        },
        {
          name: "Zendesk",
          url: "https://www.zendesk.com",
          description: "Customer support software with AI-powered support agents."
        },
        {
          name: "Salesforce Service Cloud",
          url: "https://www.salesforce.com/products/service-cloud/overview",
          description: "Customer support software with AI-powered support agents."
        }
      ]
    }
  ]
};
