import { Music } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { audioData } from '../data/categories/audio';
import { Text, Card, Grid } from '../components/ui';

export default function Audio() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="AI Audio Tools"
        description="Discover the best AI tools for audio creation, editing, and enhancement."
        keywords="AI audio tools, text to speech, music generation, audio editing, voice cloning"
      />
      
      {audioData.sections.map((section, index) => (
        <CollapsibleSection 
          key={index} 
          title={section.title} 
          defaultExpanded={index === 0}
        >
          <Card variant="outlined" className="space-y-4">
            <Text variant="body" color="secondary" className="whitespace-pre-line">
              {section.description}
            </Text>
            
            {section.tools && section.tools.length > 0 && (
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-3">
                  {section.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="space-y-1">
                      {tool.url !== undefined && tool.url !== null ? (
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-gray-700 underline hover:text-primary-dark"
                        >
                          {tool.name}
                        </a>
                      ) : (
                        <Text variant="subtitle" className="font-medium">{tool.name}</Text>
                      )}
                      <Text variant="body-sm" color="secondary" className="block">
                        {tool.description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <Grid columns={1} gap="xl">
      {audioData.sections.map((section, index) => (
        <Card key={index} variant="outlined">
          <div className="bg-primary-light p-4">
            <Text variant="h3" className="mb-0">
              {section.title}
            </Text>
          </div>
          <div className="p-6 space-y-4">
            <Text variant="body" color="secondary" className="whitespace-pre-line">
              {section.description}
            </Text>
            
            {section.tools && section.tools.length > 0 && (
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-4">
                  {section.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="space-y-2">
                      {tool.url !== undefined && tool.url !== null ? (
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-gray-700 underline hover:text-primary-dark"
                        >
                          <Text variant="body" as="span" weight="semibold">
                            {tool.name}
                          </Text>
                        </a>
                      ) : (
                        <Text variant="body" as="span" weight="semibold">
                          {tool.name}
                        </Text>
                      )}
                      <Text variant="body-sm" color="secondary" className="block">
                        {tool.description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      ))}
    </Grid>
  );

  return (
    <CategoryLayout
      title={audioData.title}
      icon={<Music className="w-5 h-5" />}
      gradientClasses={audioData.gradientClasses}
      description={audioData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      breadcrumbParent="/"
    />
  );
}
