import React from 'react';
import { Github, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GithubRepos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 to-purple-200">
      <header className="p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Github className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Github Repos</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cool Git Repos</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Explore our curated collection of innovative AI and machine learning repositories that are pushing the boundaries of what's possible.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="/github-repos/llm"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              Large Language Models
            </a>
          </li>
          <li>
            <a 
              href="/github-repos/agents"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              AI Agents and Automation
            </a>
          </li>
          <li>
            <a 
              href="/github-repos/tools"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              Development Tools and Utilities
            </a>
          </li>
          <li>
            <a 
              href="/github-repos/applications"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              AI-Powered Applications
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}