import { Github } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function ToolsRepos() {
  return (
    <SubPageLayout
      title="Development Tools and Utilities"
      description="Explore essential development tools and utilities that enhance AI development workflows and productivity."
      icon={<Github className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-violet-200 to-purple-200"
      backLink="/github-repos"
    >
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="https://github.com/langchain-ai/langchain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>LangChain - Building applications with LLMs through composability</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/microsoft/semantic-kernel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>Semantic Kernel - Integration of LLMs in software applications</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/LAION-AI/Open-Assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>Open Assistant - Conversational AI development framework</span>
            </a>
          </li>
        </ul>
      </div>
    </SubPageLayout>
  );
}