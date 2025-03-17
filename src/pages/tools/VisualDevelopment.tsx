import React from 'react';
import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function VisualDevelopment() {
  return (
    <SubPageLayout
      title="Visual Development Tools"
      description="Build applications visually with these powerful no-code development platforms."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="https://bubble.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Bubble - Visual programming for web applications</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.adalo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Adalo - Build native mobile and web apps</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.retool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Retool - Build internal tools quickly</span>
            </a>
          </li>
        </ul>
      </div>
    </SubPageLayout>
  );
}