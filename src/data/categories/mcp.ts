export interface MCPTool {
  name: string;
  description: string;
  url?: string;
}

export interface MCPSection {
  title: string;
  description: string;
  tools?: MCPTool[];
}

export const mcpData = {
  title: "Model Context Protocol (MCP)",
  gradientClasses: "bg-gradient-to-br from-purple-200 to-indigo-200",
  description: "Anthropic's open standard that connects AI assistants to external data sources and tools. Think of it as USB-C for AI - one standard protocol that works everywhere.",
  
  lastUpdated: "January 2026",
  
  sections: [
    {
      title: "What is MCP?",
      description: "Model Context Protocol is an open standard introduced by Anthropic in late 2024. It allows AI models like Claude to securely connect to external tools, databases, and services.\n\nBefore MCP, every AI integration was custom-built. Now, with MCP, you build one server and any MCP-compatible client can use it. It's like how USB-C standardized device connections.\n\n**Key benefits:**\n- One protocol to connect AI to any data source\n- Secure, two-way communication\n- Open standard anyone can implement\n- Works with Claude Desktop, Cursor, and more"
    },
    {
      title: "How MCP Works",
      description: "MCP has three main components:\n\n**1. MCP Hosts** - Applications like Claude Desktop or Cursor that want to access external tools\n\n**2. MCP Clients** - Protocol handlers that maintain connections to servers\n\n**3. MCP Servers** - Lightweight programs that expose specific capabilities:\n- **Resources**: File-like data that can be read (documents, database records)\n- **Tools**: Functions the AI can execute (search, create file, query database)\n- **Prompts**: Pre-built templates for common tasks"
    },
    {
      title: "Popular MCP Servers",
      description: "These are ready-to-use MCP servers you can install:",
      tools: [
        {
          name: "File System",
          description: "Read, write, and manage local files. Essential for coding assistants.",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem"
        },
        {
          name: "GitHub",
          description: "Interact with GitHub repos - read code, create issues, manage PRs.",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/github"
        },
        {
          name: "PostgreSQL",
          description: "Query and interact with PostgreSQL databases.",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres"
        },
        {
          name: "Slack",
          description: "Read messages, search conversations, post to channels.",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack"
        },
        {
          name: "Google Drive",
          description: "Search and read files from Google Drive.",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive"
        },
        {
          name: "Brave Search",
          description: "Web search capabilities via Brave's API.",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search"
        },
        {
          name: "Puppeteer",
          description: "Browser automation - navigate, screenshot, interact with web pages.",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer"
        }
      ]
    },
    {
      title: "Getting Started with MCP",
      description: "Here's how to start using MCP:\n\n**1. Install Claude Desktop**\nDownload from [claude.ai/download](https://claude.ai/download). The desktop app supports MCP natively.\n\n**2. Configure MCP Servers**\nEdit `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or equivalent on Windows.\n\n**3. Add a server:**\n```json\n{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/path/to/folder\"]\n    }\n  }\n}\n```\n\n**4. Restart Claude Desktop**\nThe MCP connection icon will appear, and Claude can now access your files."
    },
    {
      title: "MCP-Compatible Apps",
      description: "These applications support MCP:",
      tools: [
        {
          name: "Claude Desktop",
          description: "Anthropic's official desktop app with native MCP support.",
          url: "https://claude.ai/download"
        },
        {
          name: "Cursor",
          description: "AI code editor with MCP integration for enhanced capabilities.",
          url: "https://cursor.com"
        },
        {
          name: "Zed",
          description: "Fast, collaborative code editor with MCP support.",
          url: "https://zed.dev"
        },
        {
          name: "Cline",
          description: "VS Code extension with MCP support for autonomous coding.",
          url: "https://github.com/cline/cline"
        }
      ]
    },
    {
      title: "Building Your Own MCP Server",
      description: "Want to connect AI to your own tools? Here's how:\n\n**Python SDK:**\n```bash\npip install mcp\n```\n\n**TypeScript SDK:**\n```bash\nnpm install @modelcontextprotocol/sdk\n```\n\n**Key concepts:**\n- Define **tools** as functions with JSON schemas\n- Define **resources** as data that can be read\n- Handle requests and return structured responses\n\n**Resources:**",
      tools: [
        {
          name: "MCP Specification",
          description: "Official specification and documentation.",
          url: "https://spec.modelcontextprotocol.io"
        },
        {
          name: "MCP Servers Repository",
          description: "Official collection of reference server implementations.",
          url: "https://github.com/modelcontextprotocol/servers"
        },
        {
          name: "Python SDK",
          description: "Official Python SDK for building MCP servers.",
          url: "https://github.com/modelcontextprotocol/python-sdk"
        },
        {
          name: "TypeScript SDK",
          description: "Official TypeScript SDK for building MCP servers.",
          url: "https://github.com/modelcontextprotocol/typescript-sdk"
        }
      ]
    },
    {
      title: "Why MCP Matters",
      description: "MCP is significant because:\n\n**For users:**\n- One-time setup, works across apps\n- AI can access your actual data securely\n- No more copy-pasting context into chat\n\n**For developers:**\n- Build once, work everywhere\n- Standard protocol means less custom code\n- Growing ecosystem of pre-built servers\n\n**For the industry:**\n- Open standard prevents vendor lock-in\n- Accelerates AI integration adoption\n- Sets foundation for more capable AI agents\n\nMCP is still early (released Nov 2024), but adoption is growing fast. If you use Claude, setting up a few MCP servers can significantly enhance your workflow."
    }
  ]
};
