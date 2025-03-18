import React from 'react';
import { Github } from 'lucide-react';
import CategoryLayout from '../../components/CategoryLayout';
import SEO from '../../components/SEO';

const ToolsRepos = () => {
  // Mobile content
  const mobileContent = (
    <>
      <SEO 
        title="Development Tools and Utilities"
        description="Explore essential development tools and utilities that enhance AI development workflows and productivity."
        keywords="AI development, AI tools, AI utilities, development frameworks, AI infrastructure"
      />
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Featured Repositories</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Explore essential development tools and utilities that enhance AI development workflows and productivity.
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
                href="https://github.com/microsoft/semantic-kernel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Semantic Kernel</h3>
                  <p className="mt-1 text-sm">Microsoft's SDK for integrating AI services</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/hwchase17/chroma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Chroma</h3>
                  <p className="mt-1 text-sm">AI-native open-source embedding database</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/ray-project/ray" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Ray</h3>
                  <p className="mt-1 text-sm">Unified framework for scaling AI and Python applications</p>
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
      title="Development Tools and Utilities"
      icon={<Github className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-violet-200 to-purple-200"
      description="Explore essential development tools and utilities that enhance AI development workflows and productivity."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      breadcrumbParent="/github-repos"
    />
  );
};

export default ToolsRepos;