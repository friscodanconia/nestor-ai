export interface GithubRepoTool {
  name: string;
  description: string;
  url?: string;
  pricing?: string;
  researchNote?: string;
}

export interface GithubRepoSection {
  title: string;
  description: string;
  tools?: GithubRepoTool[];
}

export interface GithubReposData {
  title: string;
  description: string;
  gradientClasses: string;
  lastUpdated: string;
  sections: GithubRepoSection[];
}

export const githubReposData: GithubReposData = {
  title: "GitHub Repos",
  description: "The best open-source AI repositories, curated and opinionated. These aren't just popular — they're the ones actually worth your time. Star counts updated February 2026.",
  gradientClasses: "bg-gradient-to-br from-violet-200 to-purple-200",

  lastUpdated: "February 2026",

  sections: [
    {
      title: "Why This List Exists",
      description: "GitHub has thousands of AI repos. Most are abandonware, demos, or academic projects that never worked outside the author's machine. This list focuses on repos that are actively maintained, practically useful, and worth starring. We prioritize repos you'll actually use over repos with impressive READMEs."
    },
    {
      title: "🔥 Trending & Must-Know Repos",
      description: "The most impactful AI repositories right now — high activity, real-world usage, and worth watching closely:",
      tools: [
        {
          name: "OpenHands",
          description: "The leading open-source AI coding agent. Give it a GitHub issue, get back a pull request. Can plan, write, test, and debug code autonomously. Rapidly improving and backed by a strong team. ⭐ 72K+",
          url: "https://github.com/All-Hands-AI/OpenHands"
        },
        {
          name: "LobeChat",
          description: "Beautiful open-source AI chat interface. Multiple model providers, knowledge base, plugins, function calling, vision, TTS. The best self-hosted ChatGPT alternative. ⭐ 75K+",
          url: "https://github.com/lobehub/lobe-chat"
        },
        {
          name: "NextChat",
          description: "Lightweight AI assistant supporting Web, iOS, MacOS, Android, Linux, Windows. Self-hostable with one-click deploy. Clean UI, fast, and reliable. ⭐ 82K+",
          url: "https://github.com/ChatGPTNextWeb/NextChat"
        },
        {
          name: "Open Interpreter",
          description: "Natural language interface for your computer. Tell it what you want, it writes and runs code to do it. Like ChatGPT's Code Interpreter but local and with full system access. ⭐ 58K+",
          url: "https://github.com/openinterpreter/open-interpreter"
        },
        {
          name: "Repomix",
          description: "Pack your entire repository into a single AI-friendly file. Essential for feeding codebases to LLMs. Respects .gitignore, supports custom formatting, and handles large repos gracefully. ⭐ 25K+",
          url: "https://github.com/yamadashy/repomix"
        },
        {
          name: "Dyad",
          description: "Open-source local AI app builder. Like v0/Lovable/Bolt but runs entirely on your machine. Build full-stack apps through conversation. Growing fast. ⭐ 22K+",
          url: "https://github.com/dyad-sh/dyad"
        },
        {
          name: "Dify",
          description: "Open-source LLM app development platform. Visual workflow builder for chatbots, agents, and RAG pipelines. Production-ready with strong enterprise adoption. ⭐ 68K+",
          url: "https://github.com/langgenius/dify"
        },
        {
          name: "Ollama",
          description: "Run LLMs locally with a single command. Supports Llama 3, Mistral, Gemma, Phi, and dozens more. Dead simple to use. The Docker of local LLMs. ⭐ 115K+",
          url: "https://github.com/ollama/ollama"
        }
      ]
    },
    {
      title: "📚 Learning Resources",
      description: "The best free courses and guides for learning AI development. These are the ones people actually complete:",
      tools: [
        {
          name: "Generative AI for Beginners",
          description: "Microsoft's 21-lesson course on building with Generative AI. Covers prompting, RAG, agents, fine-tuning, and deployment. The most comprehensive free AI course. ⭐ 110K+",
          url: "https://github.com/microsoft/generative-ai-for-beginners"
        },
        {
          name: "AI Agents for Beginners",
          description: "Microsoft's 12-lesson course on building AI agents. Covers tool use, planning, memory, multi-agent systems. Practical, hands-on, and well-structured. ⭐ 55K+",
          url: "https://github.com/microsoft/ai-agents-for-beginners"
        },
        {
          name: "LLMs from Scratch",
          description: "Build a ChatGPT-like LLM in PyTorch from scratch, step by step. The best resource for understanding how LLMs actually work under the hood. ⭐ 90K+",
          url: "https://github.com/rasbt/LLMs-from-scratch"
        },
        {
          name: "Prompt Engineering Guide",
          description: "Comprehensive guides, papers, and resources for prompt engineering, RAG, and AI agents. The reference resource for getting better at prompting. ⭐ 75K+",
          url: "https://github.com/dair-ai/Prompt-Engineering-Guide"
        },
        {
          name: "Awesome ChatGPT Prompts",
          description: "Curated collection of ChatGPT prompts and persona templates. Great for learning prompt patterns and finding inspiration. ⭐ 120K+",
          url: "https://github.com/f/awesome-chatgpt-prompts"
        },
        {
          name: "Awesome Generative AI Guide",
          description: "One-stop resource for GenAI research updates, interview prep, notebooks, and tutorials. Well-organized and regularly updated. ⭐ 28K+",
          url: "https://github.com/aishwaryanr/awesome-generative-ai-guide"
        }
      ]
    },
    {
      title: "🤖 AI Coding Tools",
      description: "Open-source tools for AI-assisted software development — the fastest-growing category in AI:",
      tools: [
        {
          name: "OpenHands",
          description: "Autonomous AI software developer. Handles planning, coding, testing, and debugging. Can resolve GitHub issues end-to-end. The most capable open-source coding agent. ⭐ 72K+",
          url: "https://github.com/All-Hands-AI/OpenHands"
        },
        {
          name: "Aider",
          description: "AI pair programming in your terminal. Works with any LLM (Claude, GPT-4, local models). Understands your entire repo, makes changes, and creates commits. Surprisingly effective. ⭐ 28K+",
          url: "https://github.com/paul-gauthier/aider"
        },
        {
          name: "Continue",
          description: "Open-source AI code assistant that works in VS Code and JetBrains. Use any model (local or cloud). Tab autocomplete, chat, and inline editing. The open-source Copilot alternative. ⭐ 22K+",
          url: "https://github.com/continuedev/continue"
        },
        {
          name: "MoneyPrinterTurbo",
          description: "Generate high-quality short videos with one click. AI handles script, voiceover, visuals, and editing. Great for content creators automating video production. ⭐ 55K+",
          url: "https://github.com/harry0703/MoneyPrinterTurbo"
        }
      ]
    },
    {
      title: "🧠 LLM Frameworks & Infrastructure",
      description: "The foundational frameworks for building LLM-powered applications:",
      tools: [
        {
          name: "LangChain",
          description: "The most popular framework for building LLM applications. Chains, agents, retrieval, and memory. Massive ecosystem of integrations. Divisive but ubiquitous. ⭐ 100K+",
          url: "https://github.com/langchain-ai/langchain"
        },
        {
          name: "LangGraph",
          description: "Build stateful, multi-step agent workflows as graphs. From the LangChain team. More structured and reliable than raw LangChain for complex agents. ⭐ 28K+",
          url: "https://github.com/langchain-ai/langgraph"
        },
        {
          name: "LlamaIndex",
          description: "Data framework for LLM applications. Best for connecting LLMs to your data — documents, databases, APIs. The go-to for RAG applications. ⭐ 40K+",
          url: "https://github.com/run-llama/llama_index"
        },
        {
          name: "OpenAI Agents SDK",
          description: "OpenAI's official framework for building multi-agent systems. Lightweight, clean abstractions for tools, handoffs, and guardrails. Production-focused. ⭐ 20K+",
          url: "https://github.com/openai/openai-agents-python"
        },
        {
          name: "DSPy",
          description: "Framework from Stanford NLP for programming (not prompting) LLMs. Automatically optimizes prompts and few-shot examples. A different paradigm that's gaining traction. ⭐ 22K+",
          url: "https://github.com/stanfordnlp/dspy"
        },
        {
          name: "AutoGen",
          description: "Microsoft's framework for multi-agent conversations. Agents collaborate and debate to produce better outputs. Strong for research and complex reasoning. ⭐ 40K+",
          url: "https://github.com/microsoft/autogen"
        },
        {
          name: "Semantic Kernel",
          description: "Microsoft's SDK for integrating LLMs into applications. Strong .NET and Python support. Good for enterprise teams in the Microsoft ecosystem. ⭐ 24K+",
          url: "https://github.com/microsoft/semantic-kernel"
        },
        {
          name: "vLLM",
          description: "High-throughput LLM inference engine. If you're self-hosting models, vLLM is the standard for serving them efficiently. PagedAttention delivers 2-4x throughput improvement. ⭐ 40K+",
          url: "https://github.com/vllm-project/vllm"
        }
      ]
    },
    {
      title: "🔌 Agent Platforms & Memory",
      description: "Infrastructure and platforms for building, deploying, and enhancing AI agents:",
      tools: [
        {
          name: "Coze Studio",
          description: "Visual agent creation and deployment tools by ByteDance. Build agents with drag-and-drop, test interactively, deploy anywhere. ⭐ 22K+",
          url: "https://github.com/coze-dev/coze-studio"
        },
        {
          name: "mem0",
          description: "Persistent memory layer for AI agents. Agents remember user preferences, past interactions, and learned context across sessions. Essential for personalized agents. ⭐ 50K+",
          url: "https://github.com/mem0ai/mem0"
        },
        {
          name: "Letta (MemGPT)",
          description: "Framework for agents with long-term memory. Manages core, recall, and archival memory tiers automatically. Enables agents that truly learn over time. ⭐ 15K+",
          url: "https://github.com/letta-ai/letta"
        },
        {
          name: "LangFlow",
          description: "Visual UI for building LLM workflows. Drag-and-drop components, test in real-time, export as Python code or deploy as API. ⭐ 40K+",
          url: "https://github.com/langflow-ai/langflow"
        },
        {
          name: "Flowise",
          description: "Drag-and-drop LLM flow builder. Deploy chatbots and agents as API endpoints without code. Popular with non-technical teams. ⭐ 35K+",
          url: "https://github.com/FlowiseAI/Flowise"
        }
      ]
    },
    {
      title: "🖼️ Multimodal AI",
      description: "Repos for working with multiple modalities — text, images, audio, and video:",
      tools: [
        {
          name: "Stable Diffusion WebUI",
          description: "The most popular interface for running Stable Diffusion locally. Full-featured UI for image generation with extensions for ControlNet, LoRA, and more. ⭐ 148K+",
          url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
        },
        {
          name: "ComfyUI",
          description: "Node-based UI for Stable Diffusion. More powerful and flexible than WebUI for complex workflows. The power-user's choice for image generation. ⭐ 70K+",
          url: "https://github.com/comfyanonymous/ComfyUI"
        },
        {
          name: "Whisper",
          description: "OpenAI's speech recognition model. Best-in-class transcription across languages and accents. Self-hostable. The default choice for speech-to-text. ⭐ 76K+",
          url: "https://github.com/openai/whisper"
        },
        {
          name: "AudioCraft",
          description: "Meta's audio generation framework. MusicGen for music, AudioGen for sound effects, EnCodec for compression. ⭐ 22K+",
          url: "https://github.com/facebookresearch/audiocraft"
        }
      ]
    },
    {
      title: "🔬 ML Foundations",
      description: "Core machine learning frameworks and libraries that underpin the AI ecosystem:",
      tools: [
        {
          name: "Hugging Face Transformers",
          description: "The hub for pre-trained models. Thousands of models for NLP, vision, audio, and multimodal tasks. The npm of machine learning. ⭐ 140K+",
          url: "https://github.com/huggingface/transformers"
        },
        {
          name: "PyTorch Lightning",
          description: "Lightweight PyTorch wrapper for organized, scalable ML code. Handles distributed training, logging, and checkpointing so you focus on the model. ⭐ 28K+",
          url: "https://github.com/Lightning-AI/pytorch-lightning"
        },
        {
          name: "JAX",
          description: "Google's high-performance ML framework. Composable transformations (grad, jit, vmap) on NumPy code. Powers Google DeepMind's research. ⭐ 32K+",
          url: "https://github.com/jax-ml/jax"
        },
        {
          name: "Ultralytics (YOLOv8/11)",
          description: "State-of-the-art object detection. YOLO models for real-time detection, segmentation, and classification. Production-ready and easy to use. ⭐ 35K+",
          url: "https://github.com/ultralytics/ultralytics"
        }
      ]
    },
    {
      title: "🛠️ Developer Tools & Evaluation",
      description: "Tools for building, testing, evaluating, and deploying AI systems:",
      tools: [
        {
          name: "Weights & Biases",
          description: "ML experiment tracking, dataset versioning, and model management. The standard for tracking ML experiments. Free for individuals. ⭐ 10K+",
          url: "https://github.com/wandb/wandb"
        },
        {
          name: "MLflow",
          description: "Platform for the full ML lifecycle — experimentation, reproducibility, deployment, and registry. The open-source MLOps standard. ⭐ 20K+",
          url: "https://github.com/mlflow/mlflow"
        },
        {
          name: "LM-Evaluation-Harness",
          description: "Framework for evaluating language models across hundreds of benchmarks. The standard tool for LLM evaluation. Used by most leaderboards. ⭐ 8K+",
          url: "https://github.com/EleutherAI/lm-evaluation-harness"
        },
        {
          name: "ONNX Runtime",
          description: "Cross-platform inference accelerator. Optimize and deploy models across hardware — CPU, GPU, mobile, edge. Microsoft-backed and production-proven. ⭐ 15K+",
          url: "https://github.com/microsoft/onnxruntime"
        }
      ]
    },
    {
      title: "🔗 Useful Links",
      description: "Essential bookmarks for staying current with AI open source:",
      tools: [
        {
          name: "GitHub Trending",
          description: "See what's gaining stars right now. Filter by language and time range. Check weekly for the best signal-to-noise ratio.",
          url: "https://github.com/trending"
        },
        {
          name: "Hugging Face Hub",
          description: "The community platform for sharing models, datasets, and demos. Where most open-source AI models are published first.",
          url: "https://huggingface.co/"
        },
        {
          name: "Papers With Code",
          description: "Find code implementations of research papers. The bridge between academic AI and practical applications.",
          url: "https://paperswithcode.com/"
        },
        {
          name: "Awesome Lists",
          description: "Curated lists of awesome projects across every AI domain. Start with awesome-llm and awesome-generative-ai.",
          url: "https://github.com/sindresorhus/awesome"
        }
      ]
    }
  ]
};
