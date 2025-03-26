export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  // General AI Questions
  {
    question: "What is an AI agent?",
    answer: "AI agents are smart software programs that work autonomously to complete tasks, making decisions and taking actions like a personal assistant. They can work across multiple tools and figure out steps needed to complete tasks without requiring step-by-step instructions.",
    category: "General AI"
  },
  {
    question: "How do AI agents differ from regular AI applications?",
    answer: "While many apps use AI, true agents are distinguished by their autonomy - they can work across multiple tools, understand context, learn from experience, and actively work toward goals without needing constant direction.",
    category: "General AI"
  },
  {
    question: "Are AI tools safe to use for my business?",
    answer: "Most AI tools are designed with security in mind, but it's important to review their privacy policies, understand how your data is used, and ensure compliance with regulations relevant to your industry. Always verify AI-generated content before publishing.",
    category: "General AI"
  },
  {
    question: "How much do AI tools typically cost?",
    answer: "AI tool pricing varies widely from free tiers to enterprise plans costing hundreds per month. Many tools offer freemium models where basic features are free, with premium features requiring a subscription.",
    category: "General AI"
  },
  {
    question: "Can AI tools replace human workers?",
    answer: "AI tools are best viewed as collaborators rather than replacements. They excel at automating repetitive tasks and providing assistance, but human creativity, judgment, and oversight remain essential for quality results.",
    category: "General AI"
  },

  // Content Creation
  {
    question: "What are the best AI writing assistants?",
    answer: "Popular AI writing assistants include Jasper, Copy.ai, Writesonic, and Rytr. Each has unique strengths, with Jasper known for long-form content, Copy.ai for marketing copy, Writesonic for SEO content, and Rytr for affordability.",
    category: "Content Creation"
  },
  {
    question: "How do I use AI to generate blog post ideas?",
    answer: "AI writing tools can generate blog post ideas based on keywords, topics, or audience interests. Simply input your niche or topic, and the AI will suggest relevant titles, outlines, and angles to explore.",
    category: "Content Creation"
  },
  {
    question: "Can AI help with writer's block?",
    answer: "Yes, AI writing assistants excel at overcoming writer's block by generating outlines, introductions, or continuing your existing text. They can provide new perspectives and ideas when you're stuck.",
    category: "Content Creation"
  },
  {
    question: "How do I ensure AI-written content is original?",
    answer: "Always edit AI-generated content to add your unique voice and insights. Use plagiarism checkers to verify originality, and fact-check any claims or statistics provided by the AI.",
    category: "Content Creation"
  },
  {
    question: "What's the difference between AI image generators like DALL-E and Midjourney?",
    answer: "DALL-E (by OpenAI) is known for photorealistic images and following complex prompts with accuracy. Midjourney excels at artistic and stylized images with unique aesthetics. Stable Diffusion is open-source and highly customizable.",
    category: "Content Creation"
  },

  // Image & Design
  {
    question: "How do I create better prompts for AI image generation?",
    answer: "Effective prompts should be specific about subject, style, lighting, composition, and mood. Include artist references, time periods, or art movements to guide the aesthetic. Use descriptive adjectives and be precise about what you want.",
    category: "Image & Design"
  },
  {
    question: "Can AI design logos for my business?",
    answer: "Yes, AI tools can generate logo concepts based on your business name, industry, and style preferences. However, for unique branding, these should be refined by a designer or customized to ensure they're truly distinctive.",
    category: "Image & Design"
  },
  {
    question: "How can I remove backgrounds from images using AI?",
    answer: "Tools like Remove.bg and Canva's background remover use AI to automatically detect and remove image backgrounds. Simply upload your image, and the AI will separate the subject from the background.",
    category: "Image & Design"
  },
  {
    question: "Can AI help with photo restoration?",
    answer: "Yes, AI tools can restore old, damaged photos by removing scratches, enhancing details, colorizing black and white images, and improving resolution. Some popular options include GFPGAN, Remini, and MyHeritage's photo enhancer.",
    category: "Image & Design"
  },
  {
    question: "How do I convert my text descriptions into professional-looking designs?",
    answer: "Text-to-design AI tools like Canva's Magic Design and Designs.ai can convert text descriptions into professional designs for social media posts, presentations, and marketing materials by understanding your requirements and applying design principles.",
    category: "Image & Design"
  },

  // Video Creation
  {
    question: "What are AI video generators and how do they work?",
    answer: "AI video generators create video content from text prompts, existing images, or basic outlines. They use machine learning to generate animations, talking avatars, or edit footage based on your instructions.",
    category: "Video Creation"
  },
  {
    question: "Can AI create talking head videos without filming?",
    answer: "Yes, tools like Synthesia and HeyGen can create talking head videos using AI avatars that speak your script. You simply choose an avatar, input your text, and the AI generates a realistic video presentation.",
    category: "Video Creation"
  },
  {
    question: "How can I automatically add captions to my videos?",
    answer: "AI tools like Descript, Kapwing, and even YouTube's auto-caption feature can transcribe your video's audio and add captions automatically. These can then be edited for accuracy before finalizing.",
    category: "Video Creation"
  },
  {
    question: "What's the best AI tool for video editing?",
    answer: "Popular AI video editors include Descript (which allows editing video by editing text), Runway (for special effects and generative video), and CapCut (for social media videos with AI templates).",
    category: "Video Creation"
  },
  {
    question: "Can AI help create short-form videos for social media?",
    answer: "Yes, AI tools can help create engaging short-form videos by suggesting trending formats, generating script ideas, adding captions, and even editing footage to highlight the most engaging moments.",
    category: "Video Creation"
  },

  // Agents & Automation
  {
    question: "What's the difference between chat-based agents and task agents?",
    answer: "Chat-based agents (like ChatGPT) primarily interact through conversation and respond to prompts, while task agents (like Auto-GPT) can plan and execute multi-step processes with minimal user input, often working across multiple applications.",
    category: "Agents & Automation"
  },
  {
    question: "How can I use AI agents to automate my workflow?",
    answer: "Identify repetitive tasks in your workflow, then use tools like Zapier for simple automations or more advanced agent platforms for complex processes. Start with small, well-defined tasks before scaling to more complex workflows.",
    category: "Agents & Automation"
  },
  {
    question: "Are there AI agents that can help with email management?",
    answer: "Yes, email management agents can sort incoming messages, draft responses, summarize long threads, and flag important emails. Some can even schedule meetings based on email conversations.",
    category: "Agents & Automation"
  },
  {
    question: "What level of autonomy should I give to an AI agent?",
    answer: "Start with supervised autonomy where the agent suggests actions for your approval. As you build trust in its capabilities, you can gradually increase autonomy for routine tasks while maintaining oversight for critical decisions.",
    category: "Agents & Automation"
  },
  {
    question: "How do I measure the effectiveness of AI agents in my workflow?",
    answer: "Track time saved, error reduction, consistency of outputs, and user satisfaction. Compare performance metrics before and after implementation, and regularly review agent decisions to ensure quality.",
    category: "Agents & Automation"
  },

  // Personal Productivity
  {
    question: "How can AI help me manage my calendar more effectively?",
    answer: "AI calendar assistants can schedule meetings based on your preferences, suggest optimal meeting times, automatically block focus time, and even help you prioritize your day based on deadlines and importance.",
    category: "Personal Productivity"
  },
  {
    question: "What are the best AI note-taking tools?",
    answer: "Popular AI note-taking tools include Notion AI (for organizing and expanding notes), Otter.ai (for transcribing meetings), Mem (for knowledge management), and Roam Research (for connecting ideas).",
    category: "Personal Productivity"
  },
  {
    question: "Can AI help me summarize long documents or articles?",
    answer: "Yes, AI summarization tools can condense long documents, research papers, articles, or even books into concise summaries highlighting key points, making it easier to extract essential information quickly.",
    category: "Personal Productivity"
  },
  {
    question: "How do I use AI to manage my to-do list?",
    answer: "AI task managers can help prioritize tasks, suggest optimal times for completion, break down complex projects into manageable steps, and even automate follow-ups for delegated tasks.",
    category: "Personal Productivity"
  },
  {
    question: "What AI tools can help with email management?",
    answer: "AI email tools can draft responses, categorize incoming messages, suggest follow-up reminders, and help you achieve inbox zero by identifying emails that need immediate attention versus those that can wait.",
    category: "Personal Productivity"
  },

  // Education & Learning
  {
    question: "How can students use AI responsibly for learning?",
    answer: "Students can use AI as a learning aid by having it explain complex concepts, generate practice questions, provide feedback on writing, and create study guides. However, it should complement learning, not replace the effort of understanding material.",
    category: "Education & Learning"
  },
  {
    question: "What are the best AI tutoring tools for different subjects?",
    answer: "Khan Academy's Khanmigo excels at math and science tutoring, Duolingo Max for language learning, Quizlet for flashcards and quizzes, and tools like Photomath for step-by-step math problem solving.",
    category: "Education & Learning"
  },
  {
    question: "Can AI help with language learning?",
    answer: "Yes, AI language learning tools like Duolingo, Babbel, and ChatGPT can provide conversational practice, pronunciation feedback, personalized lessons, and help with translation and grammar explanations.",
    category: "Education & Learning"
  },
  {
    question: "How can teachers use AI in the classroom?",
    answer: "Teachers can use AI to generate lesson plans, create customized learning materials, automate grading for objective assessments, identify learning gaps, and provide personalized feedback to students.",
    category: "Education & Learning"
  },
  {
    question: "Is AI good for teaching coding and programming?",
    answer: "AI coding assistants like GitHub Copilot, Replit's Ghostwriter, and CodeWhisperer can help learners by explaining code, suggesting solutions to programming problems, and providing interactive coding practice with immediate feedback.",
    category: "Education & Learning"
  },

  // MCP (Model Context Protocol)
  {
    question: "What is Model Context Protocol (MCP)?",
    answer: "Model Context Protocol (MCP) is a standardized way for applications to communicate with AI models. It's an open standard created by Anthropic that allows AI assistants to safely access your information while keeping your data protected. Think of it as a 'universal translator' or 'USB-C port for AI' that connects AI to the systems where your data lives.",
    category: "MCP"
  },
  {
    question: "How does MCP improve AI applications?",
    answer: "MCP improves AI applications by providing a structured framework for AI interactions. It enables more consistent behavior across different platforms, maintains control over AI outputs, enhances privacy and security (servers control their own resources so AI never sees raw data), offers versatility (one protocol for everything from Slack to your local file system), and simplifies integration (connect once, and let MCP handle the rest behind the scenes).",
    category: "MCP"
  },
  {
    question: "Is MCP only for large language models?",
    answer: "While MCP was initially designed with large language models in mind, it's an open standard that can be applied to various AI systems, including multimodal models that handle text, images, audio, and other data types. Recently, OpenAI announced support for the MCP protocol in their agents SDK and ChatGPT desktop app, showing its broader applicability.",
    category: "MCP"
  },
  {
    question: "How can developers implement MCP in their applications?",
    answer: "Developers can implement MCP by building custom MCP servers using Anthropic's SDKs and documentation. The process typically involves: 1) Setting up a development environment with Python or TypeScript, 2) Using the MCP SDK to define what your server provides (resources, tools, or prompts), 3) Creating the connections to your data source, and 4) Testing locally with Claude Desktop. Anthropic maintains an open-source repository of MCP servers that can serve as references.",
    category: "MCP"
  },
  {
    question: "What problems does MCP solve in AI development?",
    answer: "MCP addresses several key challenges in AI development: 1) Inconsistent model behavior across different platforms, 2) Difficulty in controlling AI outputs, 3) Lack of standardization across different models, 4) Complexity of managing context in conversational AI applications, and 5) Security concerns when connecting AI to sensitive data sources. MCP's client-server architecture creates clear system boundaries that enhance security and reliability.",
    category: "MCP"
  },
  {
    question: "How can I start using MCP as a non-developer?",
    answer: "As a non-developer, you can start using MCP by: 1) Downloading an MCP-compatible application like Claude Desktop, Cursor, or Windsurf, 2) Looking for the MCP icon in your AI app and clicking to set up available servers, 3) Approving only the specific data sources you want to connect, and 4) Asking questions naturally that require multiple sources of information. MCP works behind the scenes to make your AI experiences better without requiring technical knowledge.",
    category: "MCP"
  },

  // Search Improvements
  {
    question: "How can I find the right AI tool for my specific need?",
    answer: "Use Nestor's search function with specific keywords related to your task (e.g., 'transcribe meetings' rather than just 'audio'). Filter results by category, check the tool descriptions for feature lists, and compare similar tools before deciding.",
    category: "Search Tips"
  },
  {
    question: "What are the newest AI tools added to Nestor?",
    answer: "Nestor regularly updates its database with the latest AI tools. Use the search function with terms like 'new' or 'latest' or check the recently added section on the homepage to discover the newest additions to our catalog.",
    category: "Search Tips"
  },
  {
    question: "How can I compare similar AI tools?",
    answer: "Search for the specific function you need, then compare the resulting tools based on their features, pricing, ease of use, and integration capabilities. User reviews and ratings can also help identify the best option for your needs.",
    category: "Search Tips"
  },
  {
    question: "Are there AI tools for my industry?",
    answer: "Yes, search for your industry name (e.g., 'healthcare AI' or 'real estate AI') to find specialized tools. Many categories on Nestor contain industry-specific sections highlighting tools designed for particular sectors.",
    category: "Search Tips"
  },
  {
    question: "How do I stay updated on AI tool trends?",
    answer: "Follow Nestor's newsletter, check the blog for trend analysis, and use the search function with terms like 'trending' or 'popular' to discover tools gaining traction in the AI community.",
    category: "Search Tips"
  }
];
