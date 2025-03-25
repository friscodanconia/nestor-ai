import { Wrench } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { topToolsData } from '../data/categories/topTools';
import { Text, Card, Badge, Container, Grid } from '../components/ui';

export default function TopTools() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="Top AI Tools"
        description="Discover the best no-code AI tools and resources for automation, website building, integrations, and more."
        keywords="AI tools, no-code tools, automation tools, website builders, AI integration platforms"
      />
      
      {topToolsData.categories.map((category, index) => (
        <CollapsibleSection 
          key={index} 
          title={category.title} 
          defaultExpanded={index === 0}
        >
          <Card variant="outlined" className="space-y-4">
            {category.description && (
              <Text variant="body" color="secondary">
                {category.description}
              </Text>
            )}
            
            {category.tools && category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="space-y-2">
                <Text variant="body" color="secondary">
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-primary-dark"
                  >
                    {tool.name}
                  </a>
                  {tool.description && ` - ${tool.description}`}
                </Text>
                {tool.personalExperience && (
                  <Text variant="body" color="secondary" className="italic">
                    <i className="not-italic font-bold">Personal experience:</i> {tool.personalExperience}
                  </Text>
                )}
              </div>
            ))}
            
            {category.others && (
              <Text variant="body" color="secondary">
                <span className="font-bold">Others:</span> {category.others.description}{' '}
                {category.others.tools.map((otherTool, otherIndex) => (
                  <span key={otherIndex}>
                    {otherIndex > 0 && ', '}
                    <a 
                      href={otherTool.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold underline hover:text-primary-dark"
                    >
                      {otherTool.name}
                    </a>
                  </span>
                ))}.
              </Text>
            )}
            
            {category.additionalInfo && (
              <Text variant="body" color="secondary">
                {category.additionalInfo}
              </Text>
            )}
            
            {category.personalExperience && (
              <Text variant="body" color="secondary" className="italic">
                <i className="not-italic font-bold">Personal experience:</i>{' '}
                {category.personalExperience}
                {category.freepikUrl && (
                  <> I have tried and found <a 
                    href={category.freepikUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-primary-dark"
                  >
                    Freepik
                  </a> AI suite to be most friendly with lot of features and functionalities.</>
                )}
              </Text>
            )}
          </Card>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <Grid columns={1} gap="lg">
      {topToolsData.categories.map((category, index) => (
        <Card key={index} variant="outlined" className="overflow-hidden">
          <div className="bg-primary-light p-4">
            <Text variant="h3" className="mb-0">
              {category.title}
            </Text>
            {/* Add badges for new or featured categories if needed */}
          </div>
          
          <div className="p-6 space-y-4">
            {category.description && (
              <Text variant="body" color="secondary">
                {category.description}
              </Text>
            )}
            
            {category.tools && category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="space-y-2">
                <Text variant="body" color="secondary">
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-primary-dark"
                  >
                    {tool.name}
                  </a>
                  {tool.description && ` - ${tool.description}`}
                </Text>
                {tool.personalExperience && (
                  <Text variant="body" color="secondary" className="italic">
                    <i className="not-italic font-bold">Personal experience:</i> {tool.personalExperience}
                  </Text>
                )}
              </div>
            ))}
            
            {category.others && (
              <Text variant="body" color="secondary">
                <span className="font-bold">Others:</span> {category.others.description}{' '}
                {category.others.tools.map((otherTool, otherIndex) => (
                  <span key={otherIndex}>
                    {otherIndex > 0 && ', '}
                    <a 
                      href={otherTool.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold underline hover:text-primary-dark"
                    >
                      {otherTool.name}
                    </a>
                  </span>
                ))}.
              </Text>
            )}
            
            {category.additionalInfo && (
              <Text variant="body" color="secondary">
                {category.additionalInfo}
              </Text>
            )}
            
            {category.personalExperience && (
              <Text variant="body" color="secondary" className="italic">
                <i className="not-italic font-bold">Personal experience:</i>{' '}
                {category.personalExperience}
                {category.freepikUrl && (
                  <> I have tried and found <a 
                    href={category.freepikUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-primary-dark"
                  >
                    Freepik
                  </a> AI suite to be most friendly with lot of features and functionalities.</>
                )}
              </Text>
            )}
          </div>
        </Card>
      ))}
    </Grid>
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
