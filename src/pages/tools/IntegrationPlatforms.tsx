import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function IntegrationPlatforms() {
  return (
    <SubPageLayout
      title="Integration Platforms"
      description="Connect and automate your tools and workflows with these powerful integration platforms."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="https://zapier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Zapier - Connect apps and automate workflows</span>
            </a>
          </li>
          <li>
            <a 
              href="https://make.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Make (formerly Integromat) - Visual automation platform</span>
            </a>
          </li>
          <li>
            <a 
              href="https://n8n.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>n8n - Open-source workflow automation</span>
            </a>
          </li>
        </ul>
      </div>
    </SubPageLayout>
  );
}