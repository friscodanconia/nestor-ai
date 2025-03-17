import { UserRound } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import { aiInMarketingData } from '../data/categories/aiInMarketing';

export default function AIInMarketing() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      {aiInMarketingData.topics.map((topic, index) => (
        <CollapsibleSection 
          key={index} 
          title={topic.title} 
          defaultExpanded={index === 0}
        >
          <div className="space-y-4">
            <p className="text-base text-gray-700">
              {topic.description}
              {topic.links && topic.links.map((link, linkIndex) => (
                <span key={linkIndex}>
                  {linkIndex === 0 ? ' ' : ' '}
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-rose-800"
                  >
                    {link.name}
                  </a>
                  {linkIndex < (topic.links?.length || 0) - 1 ? ' and ' : ''}
                </span>
              ))}
            </p>
          </div>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <>
      {aiInMarketingData.topics.map((topic, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-4">
            {topic.title}
          </h3>
          <div className="space-y-4">
            <p className="text-base text-gray-700">
              {topic.description}
              {topic.links && topic.links.map((link, linkIndex) => (
                <span key={linkIndex}>
                  {linkIndex === 0 ? ' ' : ' '}
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-rose-800"
                  >
                    {link.name}
                  </a>
                  {linkIndex < (topic.links?.length || 0) - 1 ? ' and ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <CategoryLayout
      title={aiInMarketingData.title}
      icon={<UserRound className="w-5 h-5" />}
      gradientClasses={aiInMarketingData.gradientClasses}
      description={aiInMarketingData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
