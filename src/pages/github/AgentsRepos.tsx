import React from 'react';
import { Github } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function AgentsRepos() {
  return (
    <SubPageLayout
      title="AI Agents and Automation"
      description="Explore repositories focused on AI agents, automation, and autonomous systems that are revolutionizing how we interact with technology."
      icon={<Github className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-violet-200 to-purple-200"
      backLink="/github-repos"
    >
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="https://github.com/Significant-Gravitas/Auto-GPT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>Auto-GPT - Autonomous GPT-4 experiment</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/reworkd/AgentGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>AgentGPT - Autonomous AI agents in your browser</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/microsoft/JARVIS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>JARVIS - System for AI agent experimentation</span>
            </a>
          </li>
        </ul>
      </div>
    </SubPageLayout>
  );
}