import React from 'react';
import { Github } from 'lucide-react';
import CategoryLayout from '../../components/CategoryLayout';
import SEO from '../../components/SEO';

const AgentsRepos = () => {
  // Mobile content
  const mobileContent = (
    <>
      <SEO 
        title="AI Agents and Automation"
        description="Explore repositories focused on AI agents, automation, and autonomous systems."
        keywords="AI agents, automation, autonomous systems, agent frameworks, AI assistants"
      />
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Featured Repositories</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Explore repositories focused on AI agents, automation, and autonomous systems.
        </p>
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
          <ul className="space-y-3 text-gray-800">
            <li>
              <a 
                href="https://github.com/langchain-ai/langchain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">LangChain</h3>
                  <p className="mt-1 text-sm">Building applications with LLMs through composability</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/microsoft/autogen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">AutoGen</h3>
                  <p className="mt-1 text-sm">Microsoft's framework for building multi-agent systems</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/reworkd/AgentGPT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">AgentGPT</h3>
                  <p className="mt-1 text-sm">Autonomous AI agents in your browser</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/yoheinakajima/babyagi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">BabyAGI</h3>
                  <p className="mt-1 text-sm">Task-driven autonomous AI agent</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Significant-Gravitas/Auto-GPT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Auto-GPT</h3>
                  <p className="mt-1 text-sm">Autonomous GPT-4 experiment</p>
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
      title="AI Agents and Automation"
      icon={<Github className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-violet-200 to-purple-200"
      description="Explore repositories focused on AI agents, automation, and autonomous systems."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      breadcrumbParent="/github-repos"
    />
  );
};

export default AgentsRepos;