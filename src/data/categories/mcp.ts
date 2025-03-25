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
  description: "Learn about the Model Context Protocol (MCP) and how it works with AI systems.",
  
  sections: [
    {
      title: "What is Model Context Protocol?",
      description: "The Model Context Protocol (MCP) is a framework for structuring and managing the context that AI models use to generate responses. It provides a standardized way to organize information, instructions, and constraints that guide AI behavior.\n\nMCP helps ensure that AI systems have the right information at the right time, improving the quality, relevance, and safety of AI-generated content."
    },
    {
      title: "Key Components of MCP",
      description: "- Context management for large language models: Techniques for efficiently handling and prioritizing the limited context window available to AI models.\n- Structured information retrieval and organization: Methods for organizing and retrieving relevant information to provide as context.\n- Memory systems for persistent knowledge: Implementation of short-term and long-term memory structures to maintain consistency across interactions.\n- Instruction formatting and prioritization: Standards for how to format and prioritize instructions given to AI models.\n- Safety guardrails and constraint enforcement: Systems to ensure AI outputs adhere to safety guidelines and ethical constraints."
    },
    {
      title: "Benefits of MCP",
      description: "- Improved AI reliability: Ensures models consistently receive the context they need to produce accurate and helpful responses.\n- Better context efficiency: Optimizes the use of limited context windows by prioritizing the most relevant information.\n- Enhanced safety: Provides consistent implementation of safety measures across different AI systems.\n- Standardized development: Creates a common framework for AI developers to work with, accelerating innovation.\n- Reduced hallucinations: Helps minimize AI hallucinations by providing structured, reliable context."
    },
    {
      title: "Implementation Approaches",
      description: "Various approaches can be used to implement MCP principles in AI systems:",
      tools: [
        {
          name: "Prompt Engineering",
          description: "Advanced prompt engineering techniques represent the simplest form of MCP, using carefully structured prompts with embedded instructions, constraints, and context management."
        },
        {
          name: "Context Windows Management",
          description: "Techniques for optimizing the use of context windows including token pruning, context compression, and priority-based context selection."
        },
        {
          name: "Retrieval Augmented Generation (RAG)",
          description: "RAG systems implement many MCP principles by retrieving relevant information from external knowledge bases and incorporating it into the model's context."
        },
        {
          name: "Tool Use and Function Calling",
          description: "By connecting AI models to external tools and functions, MCPs can extend AI capabilities while maintaining a structured approach to context management."
        }
      ]
    },
    {
      title: "Useful Resources",
      description: "These frameworks and tools can help you implement MCP principles in your AI applications:",
      tools: [
        {
          name: "LlamaIndex",
          description: "Framework for building RAG applications with structured data access and retrieval.",
          url: "https://www.llamaindex.ai/"
        },
        {
          name: "LangChain",
          description: "Framework for developing applications powered by language models with components for memory, retrieval, and tool use.",
          url: "https://www.langchain.com/"
        },
        {
          name: "DSPy",
          description: "Framework for algorithmically optimizing LM prompts and weights from Stanford NLP.",
          url: "https://github.com/stanfordnlp/dspy"
        },
        {
          name: "Guidance",
          description: "Microsoft's language model programming framework for structured generation.",
          url: "https://github.com/microsoft/guidance"
        },
        {
          name: "PromptFlow",
          description: "Microsoft's framework to build high-quality LLM apps - from prototyping, testing to production deployment and monitoring.",
          url: "https://github.com/microsoft/promptflow"
        }
      ]
    }
  ]
};
