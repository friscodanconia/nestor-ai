import { Wrench } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import { topToolsData } from '../data/categories/topTools';

export default function TopTools() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      {topToolsData.categories.map((category, index) => (
        <CollapsibleSection 
          key={index} 
          title={category.title} 
          defaultExpanded={index === 0}
        >
          <div className="space-y-4">
            {category.description && (
              <p className="text-base text-gray-700">
                {category.description}
              </p>
            )}
            
            {category.tools && category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="space-y-2">
                <p className="text-base text-gray-700">
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-blue-800"
                  >
                    {tool.name}
                  </a>
                  {tool.description && ` - ${tool.description}`}
                </p>
                {tool.personalExperience && (
                  <p className="text-base text-gray-700 italic">
                    <i className="not-italic font-bold">Personal experience:</i> {tool.personalExperience}
                  </p>
                )}
              </div>
            ))}
            
            {category.others && (
              <p className="text-base text-gray-700">
                <span className="font-bold">Others:</span> {category.others.description}{' '}
                {category.others.tools.map((otherTool, otherIndex) => (
                  <span key={otherIndex}>
                    {otherIndex > 0 && ', '}
                    <a 
                      href={otherTool.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold underline hover:text-blue-800"
                    >
                      {otherTool.name}
                    </a>
                  </span>
                ))}.
              </p>
            )}
            
            {category.additionalInfo && (
              <p className="text-base text-gray-700">
                {category.additionalInfo}
              </p>
            )}
            
            {category.personalExperience && (
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i>{' '}
                {category.personalExperience}
                {category.freepikUrl && (
                  <> I have tried and found <a 
                    href={category.freepikUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-blue-800"
                  >
                    Freepik
                  </a> AI suite to be most friendly with lot of features and functionalities.</>
                )}
              </p>
            )}
          </div>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <>
      {topToolsData.categories.map((category, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-4">
            {category.title}
          </h3>
          <div className="space-y-4">
            {category.description && (
              <p className="text-base text-gray-700">
                {category.description}
              </p>
            )}
            
            {category.tools && category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="space-y-2">
                <p className="text-base text-gray-700">
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-blue-800"
                  >
                    {tool.name}
                  </a>
                  {tool.description && ` - ${tool.description}`}
                </p>
                {tool.personalExperience && (
                  <p className="text-base text-gray-700 italic">
                    <i className="not-italic font-bold">Personal experience:</i> {tool.personalExperience}
                  </p>
                )}
              </div>
            ))}
            
            {category.others && (
              <p className="text-base text-gray-700">
                <span className="font-bold">Others:</span> {category.others.description}{' '}
                {category.others.tools.map((otherTool, otherIndex) => (
                  <span key={otherIndex}>
                    {otherIndex > 0 && ', '}
                    <a 
                      href={otherTool.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold underline hover:text-blue-800"
                    >
                      {otherTool.name}
                    </a>
                  </span>
                ))}.
              </p>
            )}
            
            {category.additionalInfo && (
              <p className="text-base text-gray-700">
                {category.additionalInfo}
              </p>
            )}
            
            {category.personalExperience && (
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i>{' '}
                {category.personalExperience}
                {category.freepikUrl && (
                  <> I have tried and found <a 
                    href={category.freepikUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-blue-800"
                  >
                    Freepik
                  </a> AI suite to be most friendly with lot of features and functionalities.</>
                )}
              </p>
            )}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <CategoryLayout
      title={topToolsData.title}
      icon={<Wrench className="w-5 h-5" />}
      gradientClasses={topToolsData.gradientClasses}
      description={topToolsData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
