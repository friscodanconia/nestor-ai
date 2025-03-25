import { FileCode } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { mcpData, MCPTool } from '../data/categories/mcp';
import { Text, Card, Grid } from '../components/ui';

// Type guard function to check if a tool has a URL
const hasUrl = (tool: MCPTool): tool is MCPTool & { url: string } => {
  return tool.url !== undefined && tool.url !== null && tool.url !== '';
};

export default function MCP() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="Model Context Protocol (MCP)"
        description="Learn about the Model Context Protocol (MCP) and how it works with AI systems."
        keywords="MCP, Model Context Protocol, AI protocol, context protocol, RAG, retrieval augmented generation"
      />
      
      {mcpData.sections.map((section, index) => (
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
      {mcpData.sections.map((section, index) => (
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
      title={mcpData.title}
      icon={<FileCode className="w-5 h-5" />}
      gradientClasses={mcpData.gradientClasses}
      description={mcpData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
