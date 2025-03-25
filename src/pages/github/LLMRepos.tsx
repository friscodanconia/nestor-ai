import React from 'react';
import { Github } from 'lucide-react';
import CategoryLayout from '../../components/CategoryLayout';
import SEO from '../../components/SEO';

const LLMRepos = () => {
  // Mobile content
  const mobileContent = (
    <>
      <SEO 
        title="Large Language Models"
        description="Explore the most innovative and impactful open-source language models that are pushing the boundaries of AI technology."
        keywords="LLM, language models, AI models, open source LLM, NLP repositories"
      />
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Featured Repositories</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Explore the most innovative and impactful open-source language models that are pushing the boundaries of AI technology.
        </p>
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
          <ul className="space-y-3 text-gray-800">
            <li>
              <a 
                href="https://github.com/openai/gpt-3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">GPT-3</h3>
                  <p className="mt-1 text-sm">OpenAI's language model with 175 billion parameters</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/facebookresearch/llama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">LLaMA</h3>
                  <p className="mt-1 text-sm">Facebook's foundational large language models</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/google/gemma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Gemma</h3>
                  <p className="mt-1 text-sm">Google's lightweight, state-of-the-art open language models</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/mistralai/mistral-src" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Mistral</h3>
                  <p className="mt-1 text-sm">Mistral AI's open-source language models</p>
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
      </div>
    </>
  );

  // Desktop content (same as mobile for now)
  const desktopContent = mobileContent;

  return (
    <CategoryLayout
      title="Large Language Models"
      icon={<Github className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-violet-200 to-purple-200"
      description="Explore the most innovative and impactful open-source language models that are pushing the boundaries of AI technology."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      breadcrumbParent="/github-repos"
    />
  );
};

export default LLMRepos;