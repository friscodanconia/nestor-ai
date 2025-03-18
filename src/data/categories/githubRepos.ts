export interface GithubRepo {
  name: string;
  url: string;
  description: string;
}

export interface GithubReposData {
  title: string;
  description: string;
  gradientClasses: string;
  overview: string;
  repos: GithubRepo[];
}

export const githubReposData: GithubReposData = {
  title: "GitHub Repos",
  description: "Explore our curated collection of innovative AI and machine learning repositories.",
  gradientClasses: "bg-gradient-to-br from-violet-200 to-purple-200",
  overview: "Explore our curated collection of innovative AI and machine learning repositories that are pushing the boundaries of what's possible.",
  repos: [
    {
      name: "LangChain",
      url: "https://github.com/langchain-ai/langchain",
      description: "Building applications with LLMs through composability"
    },
    {
      name: "Auto-GPT",
      url: "https://github.com/Significant-Gravitas/Auto-GPT",
      description: "An experimental open-source attempt to make GPT-4 fully autonomous"
    },
    {
      name: "LlamaIndex",
      url: "https://github.com/run-llama/llama_index",
      description: "LlamaIndex (formerly GPT Index) is a data framework for your LLM applications"
    },
    {
      name: "OpenAI Cookbook",
      url: "https://github.com/openai/openai-cookbook",
      description: "Examples and guides for using the OpenAI API"
    },
    {
      name: "Hugging Face Transformers",
      url: "https://github.com/huggingface/transformers",
      description: "State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX"
    },
    {
      name: "Stable Diffusion",
      url: "https://github.com/CompVis/stable-diffusion",
      description: "A latent text-to-image diffusion model"
    },
    {
      name: "Whisper",
      url: "https://github.com/openai/whisper",
      description: "Robust Speech Recognition via Large-Scale Weak Supervision"
    },
    {
      name: "Ollama",
      url: "https://github.com/ollama/ollama",
      description: "Get up and running with Llama 2, Mistral, and other large language models"
    },
    {
      name: "LocalAI",
      url: "https://github.com/go-skynet/LocalAI",
      description: "Self-hosted, community-driven, local OpenAI-compatible API"
    },
    {
      name: "Flowise",
      url: "https://github.com/FlowiseAI/Flowise",
      description: "Drag & drop UI to build your customized LLM flow"
    }
  ]
};
