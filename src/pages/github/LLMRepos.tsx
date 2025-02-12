import React from 'react';
import { Github, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LLMRepos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 to-purple-200">
      <header className="p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/github-repos')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Github className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Large Language Models</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Featured Repositories</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Explore the most innovative and impactful open-source language models that are pushing the boundaries of AI technology.
        </p>
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
          <ul className="space-y-3 text-gray-800">
            <li>
              <a 
                href="https://github.com/facebookresearch/llama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
              >
                <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
                <span>Llama - Open and efficient foundation language models</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/openai/whisper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
              >
                <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
                <span>Whisper - Robust Speech Recognition via Large-Scale Weak Supervision</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/nomic-ai/gpt4all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
              >
                <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
                <span>GPT4All - Open-source assistant-style large language models</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/microsoft/DeepSpeed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
              >
                <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
                <span>DeepSpeed - Deep learning optimization library</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/huggingface/transformers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
              >
                <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
                <span>Transformers - State-of-the-art Machine Learning</span>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}