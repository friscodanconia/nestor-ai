import React from 'react';
import { Palette } from 'lucide-react';
import SubPageLayout from '../components/SubPageLayout';
import Text from '../components/ui/Text';
import { generativeArtData, GenerativeArtTopic } from '../data/categories/generativeArt';
import CollapsibleSection from '../components/CollapsibleSection';

const formatDescription = (description: string) => {
  return description.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-3 last:mb-0">
      {paragraph}
    </p>
  ));
};

const GenerativeArt = () => {
  return (
    <SubPageLayout
      title="Generative Art"
      description="Discover AI tools that can help you create stunning generative artwork."
      icon={<Palette className="w-6 h-6" />}
      color="bg-gradient-to-br from-fuchsia-100 to-pink-200"
    >
      <div className="space-y-8">
        {generativeArtData.map((topic, index) => (
          <CollapsibleSection 
            key={index}
            title={topic.title}
            defaultOpen={index === 0}
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
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read more
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </SubPageLayout>
  );
};

export default GenerativeArt;
