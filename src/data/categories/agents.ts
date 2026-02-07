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
  description: "AI agents are the most overhyped AND most important trend in AI right now. The hype is mostly nonsense — but the reality, when it works, is genuinely transformative. An agent is AI that doesn't just answer questions but actually does things: browsing the web, writing code, managing files, calling APIs. Here's what's real and what's marketing.",

  lastUpdated: "February 2026",

  // What makes them special section
  specialFeatures: {
    description: "The key distinction between an AI chatbot and an AI agent is action. A chatbot responds. An agent acts. True agents can use tools, make decisions across multiple steps, recover from errors, and work toward a goal without hand-holding. The best ones today can browse the web, write and execute code, manage files, and interact with external services — often better than a junior employee.\n\nThe gap between demo and production is still real, though. Agents that work perfectly in controlled demos often struggle with edge cases in the real world. The most reliable agents are narrowly scoped — they do one thing well rather than trying to do everything.",
    examples: [
      {
        title: "Claude Code: AI that writes and ships software",
        url: "https://docs.anthropic.com/en/docs/claude-code",
        description: "Anthropic's CLI agent that reads your codebase, writes code, runs tests, and fixes bugs autonomously. It understands project context and can implement entire features with minimal guidance."
      },
      {
        title: "OpenAI Operator: AI that uses the web for you",
        url: "https://openai.com/index/introducing-operator/",
        description: "OpenAI's web-browsing agent that can book restaurants, shop online, fill out forms, and navigate websites on your behalf. Shows the promise and current limitations of browser agents."
      }
    ]
  },

  // Types of Agents section
  agentTypes: [
    {
      title: "Coding Agents",
      description: "AI agents that write, debug, and ship code. The most mature and practically useful category of agents today.",
      examples: [
        { name: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code" },
        { name: "Cursor", url: "https://cursor.com" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
        { name: "Windsurf", url: "https://codeium.com/windsurf" }
      ],
      autonomyLevel: "High (Can implement features, fix bugs, and refactor code with minimal supervision. Claude Code and Cursor Agent mode can handle multi-file changes autonomously.)",
      useCase: "Software development — from writing individual functions to implementing entire features. The most proven agent category."
    },
    {
      title: "Chat-Based Agents",
      description: "Conversational AI that can use tools and take actions beyond just generating text. The line between chatbot and agent is blurring.",
      examples: [
        { name: "ChatGPT", url: "https://chat.openai.com" },
        { name: "Claude", url: "https://claude.ai" },
        { name: "Gemini", url: "https://gemini.google.com" }
      ],
      autonomyLevel: "Moderate (Can browse the web, run code, analyze files, and create content. Still primarily respond to prompts rather than initiating actions.)",
      useCase: "Research, analysis, writing, and problem-solving. The foundation layer that most people interact with daily."
    },
    {
      title: "Browser & Computer Use Agents",
      description: "AI that controls a web browser or entire computer to complete tasks. The most exciting and least reliable category.",
      examples: [
        { name: "Claude Computer Use", url: "https://docs.anthropic.com/en/docs/agents-and-tools/computer-use" },
        { name: "OpenAI Operator", url: "https://openai.com/index/introducing-operator/" },
        { name: "Google Mariner", url: "https://deepmind.google/technologies/project-mariner/" }
      ],
      autonomyLevel: "Variable (Can navigate websites, fill forms, and complete multi-step web tasks. Reliability varies significantly by task complexity. Best for structured, repeatable workflows.)",
      useCase: "Web automation, data entry, online shopping, form filling. Most useful for repetitive web tasks that are too complex for simple scripts."
    },
    {
      title: "Task/Workflow Agents",
      description: "Automate multi-step business processes by connecting AI with existing tools and services.",
      examples: [
        { name: "Zapier AI", url: "https://zapier.com" },
        { name: "Make", url: "https://make.com" },
        { name: "n8n", url: "https://n8n.io" }
      ],
      autonomyLevel: "Variable (Basic automations run reliably in the background. More complex AI-driven workflows can plan and execute tasks but need monitoring.)",
      useCase: "Business automation — connecting apps, processing data, triggering workflows based on events. Most reliable when the workflow is well-defined."
    },
    {
      title: "Knowledge & Research Agents",
      description: "AI that proactively analyzes your data, surfaces insights, and helps you think through complex problems.",
      examples: [
        { name: "NotebookLM", url: "https://notebooklm.google.com" },
        { name: "Perplexity", url: "https://perplexity.ai" },
        { name: "Granola", url: "https://granola.ai" }
      ],
      autonomyLevel: "Higher (Proactively learn from your data and can offer relevant information without being asked. Best when given a focused knowledge base.)",
      useCase: "Research, document analysis, meeting intelligence, and knowledge management. Most useful for people drowning in information."
    }
  ],

  // Getting Started section
  gettingStarted: [
    {
      title: "Start with Coding Agents (Highest ROI)",
      description: "If you write code (or want to), coding agents are the most mature and practically useful category.",
      examples: [
        {
          name: "Claude Code",
          url: "https://docs.anthropic.com/en/docs/claude-code",
          description: "Anthropic's CLI agent. Best for autonomous coding tasks — reads your codebase, writes code, runs tests. Handles complex multi-file changes."
        },
        {
          name: "Cursor",
          url: "https://cursor.com",
          description: "AI-native code editor. Agent mode lets it make changes across files, run terminal commands, and iterate on errors. Most polished IDE experience."
        },
        {
          name: "GitHub Copilot",
          url: "https://github.com/features/copilot",
          description: "GitHub's AI pair programmer. Copilot Workspace can plan and implement changes across repos. Best for teams already in the GitHub ecosystem."
        }
      ],
      tips: ["Start with simple tasks (write a function, fix a bug) before attempting full feature implementation."]
    },
    {
      title: "Try No-Code Automation",
      description: "Build AI-powered workflows without writing code.",
      examples: [
        {
          name: "Zapier",
          url: "https://zapier.com",
          description: "Connect 6,000+ apps with AI-powered workflows. The new AI actions can summarize, classify, and generate content within any automation."
        },
        {
          name: "Make",
          url: "https://make.com",
          description: "Visual workflow builder with AI integrations. More flexible than Zapier for complex branching logic."
        },
        {
          name: "n8n",
          url: "https://n8n.io",
          description: "Open-source workflow automation. Self-hostable, AI-native, and increasingly popular with technical teams. Great AI agent node."
        }
      ],
      tips: ["Automate a simple routine first (like summarizing daily emails or posting to Slack when a form is submitted)."]
    },
    {
      title: "Explore Agent Platforms",
      description: "Platforms that let you build and deploy custom AI agents.",
      examples: [
        {
          name: "OpenAI Agents SDK",
          url: "https://github.com/openai/openai-agents-python",
          description: "OpenAI's official framework for building multi-agent systems. Lightweight, well-documented, and production-ready."
        },
        {
          name: "LangGraph",
          url: "https://github.com/langchain-ai/langgraph",
          description: "Build stateful, multi-step agent workflows as graphs. The most popular framework for complex agent architectures."
        },
        {
          name: "CrewAI",
          url: "https://www.crewai.io/",
          description: "Framework for orchestrating teams of AI agents with different roles. Great for multi-agent collaboration patterns."
        }
      ]
    },
    {
      title: "Learn from the Community",
      examples: [
        {
          name: "AI Agents for Beginners (Microsoft)",
          url: "https://github.com/microsoft/ai-agents-for-beginners",
          description: "12-lesson course on building AI agents. Best structured learning resource available. Free."
        },
        {
          name: "Awesome LLM Apps",
          url: "https://github.com/Shubhamsaboo/awesome-llm-apps",
          description: "Curated collection of agent implementations with code. Great for learning by example."
        }
      ]
    },
    {
      title: "Start Small, Then Iterate",
      tips: [
        "Pick one narrow task and build an agent for that. Don't try to build a general-purpose assistant.",
        "Monitor agent outputs carefully at first — trust increases with track record.",
        "Use structured outputs (JSON mode) when agents need to pass data between steps.",
        "Focus on error handling — the difference between a demo and a product is how it handles failures.",
        "Always confirm where data is stored or shared, especially with cloud-based agents."
      ]
    }
  ],

  // What tools can you use section
  toolCategories: [
    {
      title: "Agent Frameworks",
      tools: [
        {
          name: "OpenAI Agents SDK",
          url: "https://github.com/openai/openai-agents-python",
          description: "OpenAI's official lightweight framework for multi-agent workflows. Clean abstractions for tools, handoffs, and guardrails. The new standard for building with OpenAI models."
        },
        {
          name: "LangGraph",
          url: "https://github.com/langchain-ai/langgraph",
          description: "Build resilient, stateful agent workflows as graphs. From the LangChain team. Best for complex multi-step workflows with branching logic and human-in-the-loop."
        },
        {
          name: "LlamaIndex",
          url: "https://llamaindex.ai",
          description: "Leading framework for building agents over your data. Excellent for RAG-powered agents that need to reason over documents, databases, and APIs."
        },
        {
          name: "AutoGen",
          url: "https://github.com/microsoft/autogen",
          description: "Microsoft's framework for multi-agent conversations. Agents collaborate, debate, and refine outputs through conversation. Strong for research and complex reasoning tasks."
        },
        {
          name: "CrewAI",
          url: "https://www.crewai.io/",
          description: "Framework for orchestrating role-playing AI agents. Define agents with different personas and expertise, assign them tasks, and let them collaborate."
        },
        {
          name: "Haystack",
          url: "https://github.com/deepset-ai/haystack",
          description: "AI orchestration framework for production LLM applications. Pipeline-based architecture with strong focus on reliability and observability."
        }
      ]
    },
    {
      title: "Agent Platforms & IDEs",
      tools: [
        {
          name: "OpenHands",
          url: "https://github.com/All-Hands-AI/OpenHands",
          description: "Open-source AI software development agent. Can plan, write, test, and debug code autonomously. Handles entire development workflows from issue to PR."
        },
        {
          name: "Coze Studio",
          url: "https://github.com/coze-dev/coze-studio",
          description: "Visual tools for agent creation, debugging, and deployment. By ByteDance. Build agents with drag-and-drop workflows and test them interactively."
        },
        {
          name: "LobeChat",
          url: "https://github.com/lobehub/lobe-chat",
          description: "Open-source AI agent workspace with beautiful UI. Multiple model providers, knowledge base, plugins, and function calling. Self-hostable."
        },
        {
          name: "E2B",
          url: "https://e2b.dev",
          description: "Cloud runtime for AI agents. Secure sandboxed environments where agents can execute code, browse the web, and interact with files safely."
        },
        {
          name: "Dify",
          url: "https://dify.ai",
          description: "Open-source LLM app development platform. Visual workflow builder for creating AI agents and chatbots. Strong RAG pipeline support."
        }
      ]
    },
    {
      title: "Memory & Context",
      tools: [
        {
          name: "mem0",
          url: "https://github.com/mem0ai/mem0",
          description: "Universal memory layer for AI agents. Gives agents persistent memory across conversations — they remember user preferences, past interactions, and learned information."
        },
        {
          name: "Letta (MemGPT)",
          url: "https://github.com/letta-ai/letta",
          description: "Framework for building agents with long-term memory and unbounded context. Manages memory tiers automatically — core memory, recall memory, archival memory."
        }
      ]
    },
    {
      title: "Learning Resources",
      tools: [
        {
          name: "AI Agents for Beginners",
          url: "https://github.com/microsoft/ai-agents-for-beginners",
          description: "Microsoft's 12-lesson course on building AI agents. Covers tool use, planning, memory, multi-agent systems, and deployment. The best free course available."
        },
        {
          name: "Agents Towards Production",
          url: "https://github.com/NirDiamant/agents-towards-production",
          description: "End-to-end tutorials for production-grade GenAI agents. Covers evaluation, observability, deployment, and scaling. Great follow-up to the basics."
        },
        {
          name: "Awesome AI Agents",
          url: "https://github.com/e2b-dev/awesome-ai-agents",
          description: "Comprehensive list of AI agents, frameworks, and resources. Updated regularly with the latest tools and projects."
        }
      ]
    }
  ],

  // Sample Prebuilt Agents section
  prebuiltAgentCategories: [
    {
      title: "Coding Agents",
      agents: [
        {
          name: "Claude Code",
          url: "https://docs.anthropic.com/en/docs/claude-code",
          description: "Anthropic's CLI coding agent. Reads your codebase, writes and edits code, runs tests, and handles git operations. Best for complex, multi-file changes."
        },
        {
          name: "Cursor",
          url: "https://cursor.com",
          description: "AI-native code editor with Agent mode that autonomously implements features, fixes bugs, and refactors code across entire projects."
        },
        {
          name: "Windsurf",
          url: "https://codeium.com/windsurf",
          description: "AI-powered IDE by Codeium. Cascade feature handles multi-step coding tasks with deep codebase understanding."
        },
        {
          name: "OpenHands",
          url: "https://github.com/All-Hands-AI/OpenHands",
          description: "Open-source autonomous coding agent. Can go from a GitHub issue to a working pull request with minimal intervention."
        }
      ]
    },
    {
      title: "Research & Knowledge Agents",
      agents: [
        {
          name: "Perplexity",
          url: "https://perplexity.ai",
          description: "AI search engine with agentic capabilities. Pro Search conducts multi-step research, synthesizing information from multiple sources with citations."
        },
        {
          name: "NotebookLM",
          url: "https://notebooklm.google.com",
          description: "Google's AI research assistant. Upload documents and it becomes an expert on your content, answering questions with source citations."
        },
        {
          name: "Elicit",
          url: "https://elicit.com",
          description: "AI research assistant for academic papers. Searches, summarizes, and extracts data from scientific literature automatically."
        }
      ]
    },
    {
      title: "Customer Support Agents",
      agents: [
        {
          name: "Intercom Fin",
          url: "https://www.intercom.com/fin",
          description: "AI customer support agent that resolves 50%+ of conversations instantly. Trained on your help center, with seamless human handoff."
        },
        {
          name: "Zendesk AI Agents",
          url: "https://www.zendesk.com/ai/",
          description: "Enterprise AI support agents that handle routine tickets autonomously and route complex issues intelligently."
        },
        {
          name: "Sierra",
          url: "https://sierra.ai",
          description: "Conversational AI platform for customer-facing agents. Built by former Salesforce leaders. Used by Weight Watchers, SiriusXM, and others."
        }
      ]
    },
    {
      title: "Personal & Productivity Agents",
      agents: [
        {
          name: "Granola",
          url: "https://granola.ai",
          description: "AI meeting notepad. Listens to your meeting, enhances your rough notes with full context. Understands action items, decisions, and follow-ups."
        },
        {
          name: "Motion",
          url: "https://www.usemotion.com/",
          description: "AI scheduling agent. Automatically plans your day by scheduling tasks around meetings, deadlines, and energy levels."
        },
        {
          name: "Lindy",
          url: "https://www.lindy.ai/",
          description: "Build custom AI agents for any workflow — meeting scheduling, email triage, CRM updates. No-code agent builder with 3,000+ integrations."
        }
      ]
    }
  ]
};
