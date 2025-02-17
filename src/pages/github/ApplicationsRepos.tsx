import { Github } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function ApplicationsRepos() {
  return (
    <SubPageLayout
      title="AI-Powered Applications"
      description="Discover innovative open-source applications that leverage AI to solve real-world problems and enhance productivity."
      icon={<Github className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-violet-200 to-purple-200"
      backLink="/github-repos"
    >
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="https://github.com/imartinez/privateGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>PrivateGPT - Interact privately with your documents using LLMs</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/chroma-core/chroma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>Chroma - AI-native open-source embedding database</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/oobabooga/text-generation-webui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>Text Generation WebUI - Interface for running Large Language Models</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/AUTOMATIC1111/stable-diffusion-webui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-purple-800 transition-colors"></div>
              <span>Stable Diffusion WebUI - Browser interface for Stable Diffusion</span>
            </a>
          </li>
        </ul>
      </div>
    </SubPageLayout>
  );
}