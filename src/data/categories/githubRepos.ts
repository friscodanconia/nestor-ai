export interface GithubRepoTool {
  name: string;
  description: string;
  url?: string;
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
  sections: GithubRepoSection[];
}

export const githubReposData: GithubReposData = {
  title: "GitHub Repos",
  description: "Explore our curated collection of innovative AI and machine learning repositories.",
  gradientClasses: "bg-gradient-to-br from-violet-200 to-purple-200",
  
  sections: [
    {
      title: "Curated List of Github Repos",
      description: "This section highlights valuable open-source repositories for AI developers, researchers, and enthusiasts. These repositories provide frameworks, models, and tools that can help you build and implement AI solutions across various domains."
    },
    {
      title: "🔥 Trending & Must-Know Repos",
      description: "The most impactful AI repositories right now - high stars, active development, and practical applications:",
      tools: [
        {
          name: "OpenHands",
          description: "AI-driven development platform. Autonomous coding agent that can build entire projects from natural language. ⭐ 66K+",
          url: "https://github.com/OpenHands/OpenHands"
        },
        {
          name: "LobeChat",
          description: "Open-source AI agent workspace with beautiful UI. Multiple providers, knowledge base, plugins. ⭐ 70K+",
          url: "https://github.com/lobehub/lobe-chat"
        },
        {
          name: "Open Interpreter",
          description: "A natural language interface for computers. Run code, control your computer with plain English. ⭐ 61K+",
          url: "https://github.com/openinterpreter/open-interpreter"
        },
        {
          name: "NextChat",
          description: "Light and fast AI assistant supporting Web, iOS, MacOS, Android, Linux, Windows. Self-hostable. ⭐ 87K+",
          url: "https://github.com/ChatGPTNextWeb/NextChat"
        },
        {
          name: "Repomix",
          description: "Pack your entire repository into a single AI-friendly file. Perfect for feeding codebases to LLMs. ⭐ 21K+",
          url: "https://github.com/yamadashy/repomix"
        },
        {
          name: "Dyad",
          description: "Local, open-source AI app builder. v0/Lovable/Bolt alternative that runs locally. ⭐ 19K+",
          url: "https://github.com/dyad-sh/dyad"
        }
      ]
    },
    {
      title: "📚 Learning Resources",
      description: "Free courses and guides to learn AI development:",
      tools: [
        {
          name: "Generative AI for Beginners",
          description: "Microsoft's 21-lesson course on building with Generative AI. Comprehensive and beginner-friendly. ⭐ 105K+",
          url: "https://github.com/microsoft/generative-ai-for-beginners"
        },
        {
          name: "AI Agents for Beginners",
          description: "Microsoft's 12-lesson course specifically on building AI agents. Practical and hands-on. ⭐ 49K+",
          url: "https://github.com/microsoft/ai-agents-for-beginners"
        },
        {
          name: "LLMs from Scratch",
          description: "Implement a ChatGPT-like LLM in PyTorch from scratch, step by step. Deep understanding of how LLMs work. ⭐ 83K+",
          url: "https://github.com/rasbt/LLMs-from-scratch"
        },
        {
          name: "Prompt Engineering Guide",
          description: "Comprehensive guides, papers, lessons, and resources for prompt engineering, RAG, and AI agents. ⭐ 69K+",
          url: "https://github.com/dair-ai/Prompt-Engineering-Guide"
        },
        {
          name: "Awesome Generative AI Guide",
          description: "One-stop repository for GenAI research updates, interview resources, notebooks, and more. ⭐ 24K+",
          url: "https://github.com/aishwaryanr/awesome-generative-ai-guide"
        },
        {
          name: "Awesome ChatGPT Prompts",
          description: "Curated collection of prompts for ChatGPT. Great for learning prompt patterns. ⭐ 143K+",
          url: "https://github.com/f/awesome-chatgpt-prompts"
        }
      ]
    },
    {
      title: "AI Development Frameworks",
      description: "Open-source frameworks serve as the foundation for developing AI applications, providing structured approaches to common tasks and challenges."
    },
    {
      title: "Large Language Model (LLM) Frameworks",
      description: "These frameworks provide the building blocks for working with large language models:",
      tools: [
        {
          name: "LangChain",
          description: "A framework for developing applications powered by language models. LangChain provides components for working with LLMs and a standard interface for chaining these components together to create complex applications.",
          url: "https://github.com/langchain-ai/langchain"
        },
        {
          name: "LlamaIndex",
          description: "A data framework for building LLM applications over external data. It provides tools for indexing, structuring, and accessing private or domain-specific data for use with LLMs.",
          url: "https://github.com/jerryjliu/llama_index"
        },
        {
          name: "DSPy",
          description: "A framework from Stanford NLP for programming with foundation models. DSPy optimizes prompts and weights for reliable LLM performance.",
          url: "https://github.com/stanfordnlp/dspy"
        },
        {
          name: "Guidance",
          description: "A language model programming framework from Microsoft that allows for more controlled generation from LLMs through structured templates.",
          url: "https://github.com/microsoft/guidance"
        },
        {
          name: "Semantic Kernel",
          description: "Microsoft's lightweight SDK that integrates LLMs with conventional programming languages through plugins, memories, and planning.",
          url: "https://github.com/microsoft/semantic-kernel"
        }
      ]
    },
    {
      title: "Machine Learning Frameworks",
      description: "General-purpose machine learning frameworks for various AI tasks:",
      tools: [
        {
          name: "Hugging Face Transformers",
          description: "A library providing thousands of pre-trained models for natural language processing, computer vision, speech, and more.",
          url: "https://github.com/huggingface/transformers"
        },
        {
          name: "PyTorch Lightning",
          description: "A lightweight PyTorch wrapper that helps organize code and scale models from research prototypes to production.",
          url: "https://github.com/Lightning-AI/pytorch-lightning"
        },
        {
          name: "Jax",
          description: "Google's high-performance numerical computing library combining NumPy and automatic differentiation for machine learning research.",
          url: "https://github.com/google/jax"
        }
      ]
    },
    {
      title: "AI Application Repositories",
      description: "These repositories provide complete or partial solutions for specific AI applications."
    },
    {
      title: "Multimodal AI",
      description: "Repositories for working with multiple modalities like text, images, and audio:",
      tools: [
        {
          name: "CLIP",
          description: "OpenAI's Contrastive Language-Image Pre-training model that connects text and images, enabling flexible zero-shot image classification.",
          url: "https://github.com/openai/CLIP"
        },
        {
          name: "Stable Diffusion",
          description: "A latent text-to-image diffusion model for generating detailed images from text descriptions.",
          url: "https://github.com/CompVis/stable-diffusion"
        },
        {
          name: "AudioCraft",
          description: "Meta's audio generation framework including models for text-to-music generation, sound effect synthesis, and audio compression.",
          url: "https://github.com/facebookresearch/audiocraft"
        },
        {
          name: "Whisper",
          description: "OpenAI's automatic speech recognition system that approaches human-level robustness and accuracy.",
          url: "https://github.com/openai/whisper"
        }
      ]
    },
    {
      title: "AI Agents and Automation",
      description: "Repositories focused on autonomous AI agents and workflow automation:",
      tools: [
        {
          name: "AutoGPT",
          description: "An experimental open-source application showcasing the capabilities of GPT-4 in an autonomous agent setting.",
          url: "https://github.com/Significant-Gravitas/AutoGPT"
        },
        {
          name: "BabyAGI",
          description: "A simple AI agent that uses task-driven autonomy to achieve goals, showcasing a minimal implementation of autonomous LLM workflows.",
          url: "https://github.com/yoheinakajima/babyagi"
        },
        {
          name: "LangFlow",
          description: "A UI for LangChain that provides a visual way to build and prototype LLM workflows.",
          url: "https://github.com/langflow-ai/langflow"
        },
        {
          name: "Flowise",
          description: "A drag-and-drop UI for building LLM flows that can be deployed as API endpoints.",
          url: "https://github.com/FlowiseAI/Flowise"
        }
      ]
    },
    {
      title: "Developer Tools",
      description: "These repositories provide utilities and tools that enhance the AI development process."
    },
    {
      title: "Data Processing and Evaluation",
      description: "Tools for processing data and evaluating model performance:",
      tools: [
        {
          name: "LM-Harness",
          description: "A framework for evaluating language models on a wide range of tasks and benchmarks.",
          url: "https://github.com/EleutherAI/lm-evaluation-harness"
        },
        {
          name: "Weights & Biases",
          description: "Developer tools for machine learning experiment tracking, dataset versioning, and model management.",
          url: "https://github.com/wandb/wandb"
        },
        {
          name: "MLflow",
          description: "A platform for managing the end-to-end machine learning lifecycle, including experimentation, reproducibility, and deployment.",
          url: "https://github.com/mlflow/mlflow"
        }
      ]
    },
    {
      title: "Deployment and Optimization",
      description: "Tools for optimizing and deploying AI models in production:",
      tools: [
        {
          name: "ONNX Runtime",
          description: "A cross-platform inference accelerator that helps optimize and deploy models across hardware platforms.",
          url: "https://github.com/microsoft/onnxruntime"
        },
        {
          name: "TensorRT",
          description: "NVIDIA's SDK for high-performance deep learning inference, optimizing models for deployment on NVIDIA GPUs.",
          url: "https://github.com/NVIDIA/TensorRT"
        },
        {
          name: "vLLM",
          description: "A high-throughput and memory-efficient inference and serving engine for LLMs, optimizing for production deployment.",
          url: "https://github.com/vllm-project/vllm"
        },
        {
          name: "TinyML",
          description: "Resources for running machine learning models on microcontrollers and edge devices with severe memory constraints.",
          url: "https://github.com/tinyml-team/tinyml"
        }
      ]
    },
    {
      title: "Educational Resources",
      description: "Repositories containing examples, tutorials, and courses for learning AI development:",
      tools: [
        {
          name: "Machine Learning for Beginners",
          description: "Microsoft's curriculum featuring lessons on machine learning basics, classical techniques, and neural networks.",
          url: "https://github.com/microsoft/ML-For-Beginners"
        },
        {
          name: "Deep Learning Drizzle",
          description: "A curated collection of deep learning lectures, tutorials, and resources from top institutions.",
          url: "https://github.com/kmario23/deep-learning-drizzle"
        },
        {
          name: "Papers with Code",
          description: "Links state-of-the-art research papers with their official and unofficial implementations.",
          url: "https://github.com/paperswithcode/paperswithcode-data"
        }
      ]
    },
    {
      title: "Specialized AI Domains",
      description: "Repositories focused on specific AI application areas or specialized techniques."
    },
    {
      title: "Computer Vision",
      description: "Repositories for computer vision tasks:",
      tools: [
        {
          name: "YOLOv8",
          description: "The latest version of the YOLO (You Only Look Once) object detection architecture, known for its speed and accuracy.",
          url: "https://github.com/ultralytics/ultralytics"
        },
        {
          name: "Detectron2",
          description: "Meta's computer vision library providing state-of-the-art detection and segmentation algorithms.",
          url: "https://github.com/facebookresearch/detectron2"
        }
      ]
    },
    {
      title: "Natural Language Processing",
      description: "Repositories for NLP tasks:",
      tools: [
        {
          name: "spaCy",
          description: "An industrial-strength NLP library with pre-trained models for text processing tasks like tokenization, part-of-speech tagging, and named entity recognition.",
          url: "https://github.com/explosion/spaCy"
        },
        {
          name: "NLTK",
          description: "A comprehensive suite of libraries and programs for symbolic and statistical natural language processing.",
          url: "https://github.com/nltk/nltk"
        }
      ]
    },
    {
      title: "Reinforcement Learning",
      description: "Repositories for reinforcement learning:",
      tools: [
        {
          name: "Stable-Baselines3",
          description: "A set of reliable implementations of reinforcement learning algorithms in PyTorch.",
          url: "https://github.com/DLR-RM/stable-baselines3"
        },
        {
          name: "Gymnasium",
          description: "A collection of environments for developing and comparing reinforcement learning algorithms.",
          url: "https://github.com/Farama-Foundation/Gymnasium"
        }
      ]
    },
    {
      title: "Useful Links",
      description: "Additional resources for discovering AI repositories:",
      tools: [
        {
          name: "GitHub Trending",
          description: "Discover currently popular repositories.",
          url: "https://github.com/trending"
        },
        {
          name: "Awesome Lists",
          description: "Curated lists of awesome projects across many domains.",
          url: "https://github.com/sindresorhus/awesome"
        },
        {
          name: "Papers With Code",
          description: "Find code implementations of research papers.",
          url: "https://paperswithcode.com/"
        },
        {
          name: "Hugging Face",
          description: "Community and platform for sharing models and datasets.",
          url: "https://huggingface.co/"
        },
        {
          name: "Model Zoo",
          description: "Discover open source deep learning code and pretrained models.",
          url: "https://modelzoo.co/"
        }
      ]
    }
  ]
};
