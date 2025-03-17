import { Headphones } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import { audioData } from '../data/categories/audio';

export default function Audio() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      {audioData.sections.map((section, index) => (
        <CollapsibleSection 
          key={index} 
          title={section.title} 
          defaultExpanded={index === 0}
        >
          <div className="space-y-4">
            <p className="text-base text-gray-700">
              {section.description}
            </p>
            <a 
              href={section.linkUrl}
              className="flex items-center gap-2 hover:text-teal-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-teal-800 transition-colors"></div>
              <span className="text-base text-gray-700 hover:text-teal-800 transition-colors">{section.linkText}</span>
            </a>
          </div>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <>
      {audioData.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-4">
            {section.title}
          </h3>
          <div className="space-y-4">
            <p className="text-base text-gray-700">
              {section.description}
            </p>
            <a 
              href={section.linkUrl}
              className="flex items-center gap-2 hover:text-teal-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-teal-800 transition-colors"></div>
              <span className="text-base text-gray-700 hover:text-teal-800 transition-colors">{section.linkText}</span>
            </a>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <CategoryLayout
      title={audioData.title}
      icon={<Headphones className="w-5 h-5" />}
      gradientClasses={audioData.gradientClasses}
      description={audioData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
