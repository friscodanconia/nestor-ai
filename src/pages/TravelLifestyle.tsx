import React from 'react';
import { Plane } from 'lucide-react';
import CategoryLayout from '../components/CategoryLayout';
import Text from '../components/ui/Text';
import { travelLifestyleData, TravelLifestyleTopic } from '../data/categories/travelLifestyle';
import CollapsibleSection from '../components/CollapsibleSection';
import SEO from '../components/SEO';

const formatDescription = (description: string) => {
  return description.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-3 last:mb-0">
      {paragraph}
    </p>
  ));
};

const TravelLifestyle = () => {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="Travel & Lifestyle"
        description="Discover AI tools that can enhance your travel experiences and lifestyle."
        keywords="AI travel, trip planning, language translation, local recommendations, lifestyle"
      />
      
      <div className="space-y-8">
        {travelLifestyleData.map((topic, index) => (
          <CollapsibleSection 
            key={index}
            title={topic.title}
            defaultExpanded={index === 0}
          >
            <div className="space-y-4">
              <div className="prose prose-slate max-w-none">
                {formatDescription(topic.description)}
              </div>
              
              {topic.links && topic.links.length > 0 && (
                <div className="space-y-2">
                  <Text variant="subtitle" className="font-medium">
                    Useful Links:
                  </Text>
                  <ul className="list-disc pl-5 space-y-1">
                    {topic.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {topic.readMoreUrl && (
                <div className="pt-2">
                  <a 
                    href={topic.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              )}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </>
  );

  // Desktop content (same as mobile for now)
  const desktopContent = mobileContent;

  return (
    <CategoryLayout
      title="Travel & Lifestyle"
      icon={<Plane className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-sky-100 to-blue-200"
      description="Discover AI tools that can enhance your travel experiences and lifestyle."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default TravelLifestyle;
