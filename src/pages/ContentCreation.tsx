import { Pencil } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { contentCreationData, ContentTool, ContentSection } from '../data/categories/contentCreation';
import { Text, Card, Grid } from '../components/ui';

const hasUrl = (tool: ContentTool): tool is ContentTool & { url: string } => {
  return tool.url !== undefined && tool.url !== null && tool.url !== '';
};

const hasTools = (section: ContentSection): section is ContentSection & { tools: ContentTool[] } => {
  return section.tools !== undefined && Array.isArray(section.tools) && section.tools.length > 0;
};

export default function ContentCreation() {
  const mobileContent = (
    <>
      <SEO
        title="Content Creation"
        description="AI tools for writing, image generation, SEO, and social media content."
        keywords="AI writing, content creation, AI images, SEO tools, social media AI"
      />

      {contentCreationData.sections.map((section, index) => (
        <CollapsibleSection
          key={index}
          title={section.title}
          defaultExpanded={index === 0}
        >
          <Card variant="outlined" className="space-y-4">
            <Text variant="body" color="secondary" className="whitespace-pre-line">
              {section.description}
            </Text>

            {hasTools(section) && (
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-3">
                  {(section.tools as ContentTool[]).map((tool, toolIndex) => (
                    <li key={toolIndex} className="space-y-1">
                      {hasUrl(tool) ? (
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
                      {tool.pricing && (
                        <Text variant="caption" className="block mt-1 text-emerald-700 font-medium">
                          💰 {tool.pricing}
                        </Text>
                      )}
                      {tool.researchNote && (
                        <Text variant="caption" className="block mt-1 italic text-indigo-700">
                          💡 {tool.researchNote}
                        </Text>
                      )}
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

  const desktopContent = (
    <Grid columns={1} gap="xl">
      {contentCreationData.sections.map((section, index) => (
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

            {hasTools(section) && (
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-4">
                  {(section.tools as ContentTool[]).map((tool, toolIndex) => (
                    <li key={toolIndex} className="space-y-2">
                      {hasUrl(tool) ? (
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
                      {tool.pricing && (
                        <Text variant="caption" className="block mt-1 text-emerald-700 font-medium">
                          💰 {tool.pricing}
                        </Text>
                      )}
                      {tool.researchNote && (
                        <Text variant="caption" className="block mt-1 italic text-indigo-700">
                          💡 {tool.researchNote}
                        </Text>
                      )}
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
      title={contentCreationData.title}
      icon={<Pencil className="w-6 h-6" />}
      gradientClasses={contentCreationData.gradientClasses}
      description={contentCreationData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
