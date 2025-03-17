import { Video as VideoIcon } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import { videoData } from '../data/categories/video';

export default function Video() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      {videoData.sections.map((section, index) => (
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
              className="flex items-center gap-2 hover:text-red-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-red-800 transition-colors"></div>
              <span className="text-base text-gray-700 hover:text-red-800 transition-colors">{section.linkText}</span>
            </a>
          </div>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <>
      {videoData.sections.map((section, index) => (
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
              className="flex items-center gap-2 hover:text-red-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-red-800 transition-colors"></div>
              <span className="text-base text-gray-700 hover:text-red-800 transition-colors">{section.linkText}</span>
            </a>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <CategoryLayout
      title={videoData.title}
      icon={<VideoIcon className="w-5 h-5" />}
      gradientClasses={videoData.gradientClasses}
      description={videoData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
