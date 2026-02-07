import { Palette } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { generativeArtData, GenArtTool, GenArtSection } from '../data/categories/generativeArt';
import { Text, Card, Grid } from '../components/ui';

const hasUrl = (tool: GenArtTool): tool is GenArtTool & { url: string } => {
  return tool.url !== undefined && tool.url !== null && tool.url !== '';
};

const hasTools = (section: GenArtSection): section is GenArtSection & { tools: GenArtTool[] } => {
  return section.tools !== undefined && Array.isArray(section.tools) && section.tools.length > 0;
};

export default function GenerativeArt() {
  const mobileContent = (
    <>
      <SEO
        title="Generative Art"
        description="AI tools and communities for creative art generation, animation, and digital art."
        keywords="generative art, AI art, Stable Diffusion, ComfyUI, AI animation"
      />

      {generativeArtData.sections.map((section, index) => (
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
                  {(section.tools as GenArtTool[]).map((tool, toolIndex) => (
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
      {generativeArtData.sections.map((section, index) => (
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
                  {(section.tools as GenArtTool[]).map((tool, toolIndex) => (
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
      title={generativeArtData.title}
      icon={<Palette className="w-6 h-6" />}
      gradientClasses={generativeArtData.gradientClasses}
      description={generativeArtData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
