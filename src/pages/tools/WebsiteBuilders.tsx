import React from 'react';
import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function WebsiteBuilders() {
  return (
    <SubPageLayout
      title="Website Builders"
      description="Discover powerful no-code website builders that enable you to create professional websites without writing code."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="https://webflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Webflow - Professional website builder with advanced design capabilities</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.framer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Framer - Interactive website and app prototyping platform</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.wix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-800 transition-colors group text-base"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-800 transition-colors"></div>
              <span>Wix - Comprehensive website builder with AI features</span>
            </a>
          </li>
        </ul>
      </div>
    </SubPageLayout>
  );
}