import React from 'react';
import { Code } from 'lucide-react';
import CategoryLayout from '../components/CategoryLayout';
import CollapsibleSection from '../components/CollapsibleSection';
import SEO from '../components/SEO';

const MCP: React.FC = () => {
  // Content for mobile and desktop views
  const content = (
    <>
      <SEO 
        title="Model Context Protocol (MCP)"
        description="Model Context Protocol (MCP) is a standardized way for applications to communicate with AI models. It defines how context, instructions, and data are passed to models, enabling more consistent and controllable AI interactions."
        keywords="MCP, Model Context Protocol, AI protocol, context protocol, Anthropic, Claude, ChatGPT"
        schemaType="Article"
      />
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <p className="text-gray-700 mb-4 font-semibold">
          <strong>TL;DR:</strong> Model Context Protocol (MCP) is a standardized way for applications to communicate with AI models. No more worrying about sharing API keys or giving AI complete access—MCP keeps things compartmentalized so your data stays protected.
        </p>
      </div>
      
      {/* What is MCP Section */}
      <CollapsibleSection title="What is MCP?" defaultExpanded={true}>
        <div className="prose prose-slate max-w-none">
          <p>
            Model Context Protocol (MCP) is an open standard created by Anthropic that enables more structured and controlled interactions with large language models. It defines how context, instructions, and data are passed to models, allowing AI assistants to safely access your information while keeping your data protected. Think of it as a "universal translator" or "USB-C port for AI" that connects AI to the systems where your data lives.
          </p>
        </div>
      </CollapsibleSection>
      
      {/* How MCP Works Section */}
      <CollapsibleSection title="How MCP Works">
        <div className="prose prose-slate max-w-none">
          <p>
            MCP uses a client-server architecture where:
          </p>
          <ul>
            <li><strong>AI Applications (Hosts/Clients)</strong> - The tools you interact with directly, like Claude Desktop or AI-enhanced code editors</li>
            <li><strong>Specialized Servers</strong> - Each handles one specific type of information (files, email, web) and follows strict security rules</li>
          </ul>
          
          <p>
            MCP's power comes from handling both local resources (your files, databases) and remote ones (Slack, GitHub) through the same protocol. Servers can share:
          </p>
          <ul>
            <li>Resources (files, documents, data)</li>
            <li>Tools (API integrations, actions)</li>
            <li>Prompts (templated interactions)</li>
          </ul>
          
          <p>
            Security is built into the protocol—servers control their own resources, there's no need to share API keys with AI providers, and there are clear system boundaries.
          </p>
          
          <p>
            Currently, the MCP spec defines two kinds of servers, based on the transport mechanism they use:
          </p>
          <ol>
            <li>stdio servers run as a subprocess of your application. You can think of them as running "locally".</li>
            <li>HTTP over SSE servers run remotely. You connect to them via a URL. SSE stands for Server-Sent Events, a web technology allowing a server to send real-time updates to a client.</li>
          </ol>
        </div>
      </CollapsibleSection>
      
      {/* Real-World Examples Section */}
      <CollapsibleSection title="Real-World Examples">
        <div className="prose prose-slate max-w-none">
          <h4 className="font-medium">Writing an Important Email:</h4>
          <ul>
            <li>Your AI assistant receives your request for help</li>
            <li>It connects to a server that accesses your draft email</li>
            <li>Another server searches for relevant statistics</li>
            <li>Your assistant combines everything to improve your email</li>
          </ul>
          
          <h4 className="font-medium">Integrated Tools:</h4>
          <p>
            <a href="https://github.com/ahujasid/blender-mcp" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Blender</a> MCP to create 3D designs, 
            <a href="https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer"> Figma</a> MCP for Cursor, 
            scrape the web with <a href="https://github.com/mendableai/firecrawl-mcp-server" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Firecrawl</a>, 
            <a href="https://actions.zapier.com/settings/mcp/" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer"> Zapier</a> MCP to connect your AI.
          </p>
          
          <h4 className="font-medium">Coding with AI:</h4>
          <p>
            Multiple servers activate simultaneously to access your code files, documentation, and check GitHub issues—all while keeping your code private because each server has only limited permissions.
          </p>
        </div>
      </CollapsibleSection>
      
      {/* Why This Matters Section */}
      <CollapsibleSection title="Why This Matters">
        <div className="prose prose-slate max-w-none">
          <ul>
            <li><strong>Privacy & Security:</strong> Servers control their own resources so your AI never sees raw data.</li>
            <li><strong>Versatility:</strong> Use one protocol for everything from Slack to your local file system.</li>
            <li><strong>Ease of Use:</strong> Connect once, and let MCP handle the rest behind the scenes.</li>
            <li><strong>Consistency:</strong> Enables more consistent and controllable AI interactions across different platforms.</li>
            <li><strong>Standardization:</strong> Addresses the lack of standardization across different models and reduces unexpected behaviors.</li>
          </ul>
          
          <p>
            MCP is building a world where AI connects to any data source through a single, elegant protocol. Integrate once, connect to data anywhere, and experience AI that's more helpful, more secure, and more connected to your digital world.
          </p>
        </div>
      </CollapsibleSection>
      
      {/* For Non-Developers Section */}
      <CollapsibleSection title="I am not a developer, how do I use MCP?">
        <div className="prose prose-slate max-w-none">
          <p>
            As a non-developer, you don't need to worry about the technical details of MCP—it works behind the scenes to make your AI experiences better. Here's how you can benefit from MCP:
          </p>
          <ol>
            <li>Use MCP-compatible applications like Claude Desktop, which already has MCP built in. If you go to Claude Desktop, you will see an MCP icon on the bottom right of your chat window, click on it and will open up a tab that you will use to activate MCP.</li>
            <li>Connect pre-built MCP servers through simple setup processes—many applications provide user-friendly interfaces to add connections to services like Google Drive, Slack, or your file system.</li>
            <li>Ask questions naturally that require multiple sources of information. For example, "Summarize my recent project notes and find relevant research papers" would use MCP to access both your notes and search for papers.</li>
            <li>Enjoy the enhanced capabilities without needing to understand the technical implementation. MCP is designed to be invisible to end users—you'll just notice that your AI assistant can do more helpful things with your data.</li>
          </ol>
          <p>
            Many applications will handle the setup process through simple permissions dialogs, similar to when you allow a website to access your location or when you connect apps to your Google account.
          </p>
        </div>
      </CollapsibleSection>
      
      {/* Getting Started Section */}
      <CollapsibleSection title="How can I start?">
        <div className="prose prose-slate max-w-none">
          <ol>
            <li><strong>Download an MCP-Compatible App:</strong> Claude Desktop, Cursor, or Windsurf. If you are trying for the first time, use Claude Desktop. ChatGPT will soon roll out support for MCP in their app, so you may want to wait for that if you don't want more software.</li>
            <li><strong>Configure MCP:</strong> Look for the MCP icon in your AI app and click to set up available servers (file system, Slack, Google Drive). It will be on bottom right of your chat window.</li>
            <li><strong>Grant Permissions:</strong> Approve only the specific data sources you want. You can see official servers at the MCP Registry.</li>
            <li><strong>Ask Questions Naturally:</strong> Example: "Summarize my recent project notes and find relevant online research." MCP will securely connect to both data sources behind the scenes.</li>
            <li><strong>Explore More Servers:</strong> Check Anthropic's GitHub repo or Third-party servers list.</li>
          </ol>
        </div>
      </CollapsibleSection>
      
      {/* Pre-built Servers Section */}
      <CollapsibleSection title="Is there a repository of pre-built servers?">
        <div className="prose prose-slate max-w-none">
          <p>
            Yes! Anthropic maintains an open-source repository of MCP servers including pre-built options for Google Drive, Slack, GitHub, Git, Postgres, and web browsers. The community is actively contributing additional servers, making it easy to connect to popular services without building connections from scratch.
          </p>
          <p>
            Here are some links:
          </p>
          <ul>
            <li><a href="https://github.com/modelcontextprotocol/servers" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Github Anthropic link for available servers</a></li>
            <li><a href="https://github.com/punkpeye/awesome-mcp-servers" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Github third party link for available servers</a></li>
            <li><a href="https://mcp.composio.dev/" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Composio pre-built servers</a></li>
          </ul>
        </div>
      </CollapsibleSection>
      
      {/* Build Your Own Section */}
      <CollapsibleSection title="How can I build my own?">
        <div className="prose prose-slate max-w-none">
          <p>
            Developers can build custom MCP servers using Anthropic's SDKs and documentation. The process typically involves:
          </p>
          <ol>
            <li>Setting up a development environment with Python or TypeScript</li>
            <li>Using the MCP SDK to define what your server provides (resources, tools, or prompts)</li>
            <li>Creating the connections to your data source</li>
            <li>Testing locally with Claude Desktop</li>
          </ol>
        </div>
      </CollapsibleSection>
      
      {/* Use Case Section */}
      <CollapsibleSection title="Show me a real-life use case">
        <div className="prose prose-slate max-w-none">
          <p>
            A marketing team uses Claude with MCP to create content strategies. Their custom MCP setup connects to:
          </p>
          <ul>
            <li>Their CRM to understand customer demographics</li>
            <li>Google Analytics to see which content performs best</li>
            <li>Their content library to reference existing materials</li>
            <li>Their brand guidelines to ensure consistency</li>
          </ul>
          <p>
            With one question, Claude can analyze past performance, suggest new content ideas, and even draft outlines—all while adhering to brand guidelines and leveraging customer insights.
          </p>
        </div>
      </CollapsibleSection>
      
      {/* Only for Claude Section */}
      <CollapsibleSection title="Is MCP only for Claude?">
        <div className="prose prose-slate max-w-none">
          <p>
            While created by Anthropic, MCP is an open standard designed to work with any AI system. It aims to create a universal protocol that all AI models and tools can adopt. MCP can be applied to various AI systems, including multimodal models that handle text, images, audio, and other data types.
          </p>
          <p>
            Recently, OpenAI announced support for MCP protocol in the agents SDK and ChatGPT desktop app.
          </p>
        </div>
      </CollapsibleSection>
      
      {/* Problems Solved Section */}
      <CollapsibleSection title="What problems does MCP solve?">
        <div className="prose prose-slate max-w-none">
          <p>
            MCP addresses several key challenges in AI development:
          </p>
          <ul>
            <li>Inconsistent model behavior across different platforms</li>
            <li>Difficulty in controlling AI outputs</li>
            <li>Lack of standardization across different models</li>
            <li>Complexity of managing context in conversational AI applications</li>
            <li>Security concerns when connecting AI to sensitive data sources</li>
          </ul>
        </div>
      </CollapsibleSection>
      
      {/* Resources Section */}
      <CollapsibleSection title="I don't have time to read all this, can you share links?">
        <div className="prose prose-slate max-w-none">
          <ul>
            <li><a href="https://modelcontextprotocol.io" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Official MCP documentation</a></li>
            <li><a href="https://github.com/modelcontextprotocol" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a></li>
            <li><a href="https://www.anthropic.com/news/model-context-protocol" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Anthropic's announcement</a></li>
            <li><a href="https://www.youtube.com/watch?v=kQmXtrmQ5Zg" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Youtube Video on MCP protocol for AI Engineering</a></li>
            <li><a href="https://www.aihero.dev/model-context-protocol-tutorial" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Matt Pocock free course on MCP</a> (more dev focused)</li>
            <li><a href="https://github.com/browserbase/mcp-server-browserbase" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">Browserbase MCP Server</a></li>
            <li><a href="https://www.mcpt.com/" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">MCP servers registry</a></li>
            <li><a href="https://github.com/appcypher/awesome-mcp-servers?tab=readme-ov-file" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">MCP server list for use cases</a></li>
          </ul>
        </div>
      </CollapsibleSection>
    </>
  );

  return (
    <CategoryLayout
      title="Model Context Protocol (MCP)"
      icon={<Code className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-blue-100 to-indigo-200"
      description="Model Context Protocol (MCP) is a standardized way for applications to communicate with AI models. It defines how context, instructions, and data are passed to models, enabling more consistent and controllable AI interactions."
      mobileContent={content}
      desktopContent={content}
      breadcrumbParent="/"
    />
  );
};

export default MCP;
