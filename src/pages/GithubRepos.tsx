import React from 'react';
import { Github } from 'lucide-react';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';

const GithubRepos = () => {
  // Mobile content
  const mobileContent = (
    <>
      <SEO 
        title="GitHub Repos"
        description="Explore our curated collection of innovative AI and machine learning repositories."
        keywords="GitHub repositories, AI repos, machine learning code, open source AI, developer resources"
      />
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cool Git Repos</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Explore our curated collection of innovative AI and machine learning repositories that are pushing the boundaries of what's possible.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="https://github.com/openai/openai-cookbook" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">OpenAI Cookbook</h3>
                <p className="mt-1 text-sm">Examples and guides for using the OpenAI API</p>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">Stable Diffusion WebUI</h3>
                <p className="mt-1 text-sm">Browser interface for Stable Diffusion</p>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/huggingface/transformers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">Hugging Face Transformers</h3>
                <p className="mt-1 text-sm">State-of-the-art Natural Language Processing for PyTorch and TensorFlow</p>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/ggerganov/llama.cpp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">llama.cpp</h3>
                <p className="mt-1 text-sm">Port of Facebook's LLaMA model in C/C++</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  // Desktop content (same as mobile for now)
  const desktopContent = mobileContent;

  return (
    <CategoryLayout
      title="GitHub Repos"
      icon={<Github className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-violet-200 to-purple-200"
      description="Explore our curated collection of innovative AI and machine learning repositories."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default GithubRepos;