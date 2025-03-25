import { Users } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { agentsData } from '../data/categories/agents';
import { Text, Card, Badge, Container, Grid } from '../components/ui';

export default function Agents() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="AI Agents"
        description="Explore AI agents that can help with various tasks, from personal assistance to business automation."
        keywords="AI agents, AI assistants, autonomous agents, AI tools, virtual assistants"
      />
      
      <CollapsibleSection title="What makes them special?" defaultExpanded={true}>
        <Card variant="outlined" className="space-y-4">
          <Text variant="body" color="secondary">
            {agentsData.specialFeatures.description}
          </Text>
          <ul className="list-disc pl-5 space-y-4">
            {agentsData.specialFeatures.examples.map((example, index) => (
              <li key={index} className="space-y-2">
                <a 
                  href={example.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-700 underline hover:text-primary-dark"
                >
                  <Text variant="body" as="span">
                    {example.title}
                  </Text>
                </a>
                <Text variant="body-sm" color="secondary">
                  {example.description}
                </Text>
              </li>
            ))}
          </ul>
        </Card>
      </CollapsibleSection>

      <CollapsibleSection title="Types of Agents">
        <Card variant="outlined" className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.agentTypes.map((type, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{type.title}</Text>
                <ul className="space-y-2">
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">What:</Text> {type.description}
                    </Text>
                  </li>
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">Examples:</Text> {type.examples.map((example, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={example.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-dark">
                            {example.name}
                          </a>
                        </span>
                      ))}.
                    </Text>
                  </li>
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">Autonomy Level:</Text> {type.autonomyLevel}
                    </Text>
                  </li>
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">Use Case:</Text> {type.useCase}
                    </Text>
                  </li>
                </ul>
              </li>
            ))}
          </ol>
        </Card>
      </CollapsibleSection>

      <CollapsibleSection title="Getting Started">
        <Card variant="outlined" className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.gettingStarted.map((step, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{step.title}</Text>
                <ul className="space-y-2">
                  {step.description && (
                    <li>
                      <Text variant="body" color="secondary">{step.description}</Text>
                    </li>
                  )}
                  {step.examples && step.examples.map((example, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">
                        <a href={example.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary-dark">
                          {example.name}
                        </a>
                        {example.description && `: ${example.description}`}
                      </Text>
                    </li>
                  ))}
                  {step.tips && step.tips.map((tip, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">{tip}</Text>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Card>
      </CollapsibleSection>

      <CollapsibleSection title="What tools can you use">
        <Card variant="outlined" className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.toolCategories.map((category, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{category.title}</Text>
                <ul className="space-y-2">
                  {category.tools.map((tool, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary-dark">
                          {tool.name}
                        </a>
                        : {tool.description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Card>
      </CollapsibleSection>

      <CollapsibleSection title="Sample Prebuilt Agents">
        <Card variant="outlined" className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.prebuiltAgentCategories.map((category, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{category.title}</Text>
                <ul className="space-y-2">
                  {category.agents.map((agent, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">
                        <a href={agent.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary-dark">
                          {agent.name}
                        </a>
                        : {agent.description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Card>
      </CollapsibleSection>
    </>
  );

  // Desktop content
  const desktopContent = (
    <Grid columns={1} gap="xl">
      <Card variant="outlined">
        <div className="bg-primary-light p-4">
          <Text variant="h3" className="mb-0">
            What makes them special?
          </Text>
        </div>
        <div className="p-6 space-y-4">
          <Text variant="body" color="secondary">
            {agentsData.specialFeatures.description}
          </Text>
          <ul className="list-disc pl-5 space-y-4">
            {agentsData.specialFeatures.examples.map((example, index) => (
              <li key={index} className="space-y-2">
                <a 
                  href={example.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-700 underline hover:text-primary-dark"
                >
                  <Text variant="body" as="span">
                    {example.title}
                  </Text>
                </a>
                <Text variant="body-sm" color="secondary">
                  {example.description}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card variant="outlined">
        <div className="bg-primary-light p-4">
          <Text variant="h3" className="mb-0">
            Types of Agents
          </Text>
        </div>
        <div className="p-6 space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.agentTypes.map((type, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{type.title}</Text>
                <ul className="space-y-2">
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">What:</Text> {type.description}
                    </Text>
                  </li>
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">Examples:</Text> {type.examples.map((example, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={example.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-dark">
                            {example.name}
                          </a>
                        </span>
                      ))}.
                    </Text>
                  </li>
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">Autonomy Level:</Text> {type.autonomyLevel}
                    </Text>
                  </li>
                  <li>
                    <Text variant="body" color="secondary">
                      <Text as="span" weight="semibold">Use Case:</Text> {type.useCase}
                    </Text>
                  </li>
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Card>

      <Card variant="outlined">
        <div className="bg-primary-light p-4">
          <Text variant="h3" className="mb-0">
            Getting Started
          </Text>
        </div>
        <div className="p-6 space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.gettingStarted.map((step, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{step.title}</Text>
                <ul className="space-y-2">
                  {step.description && (
                    <li>
                      <Text variant="body" color="secondary">{step.description}</Text>
                    </li>
                  )}
                  {step.examples && step.examples.map((example, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">
                        <a href={example.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary-dark">
                          {example.name}
                        </a>
                        {example.description && `: ${example.description}`}
                      </Text>
                    </li>
                  ))}
                  {step.tips && step.tips.map((tip, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">{tip}</Text>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Card>

      <Card variant="outlined">
        <div className="bg-primary-light p-4">
          <Text variant="h3" className="mb-0">
            What tools can you use
          </Text>
        </div>
        <div className="p-6 space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.toolCategories.map((category, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{category.title}</Text>
                <ul className="space-y-2">
                  {category.tools.map((tool, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary-dark">
                          {tool.name}
                        </a>
                        : {tool.description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Card>

      <Card variant="outlined">
        <div className="bg-primary-light p-4">
          <Text variant="h3" className="mb-0">
            Sample Prebuilt Agents
          </Text>
        </div>
        <div className="p-6 space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.prebuiltAgentCategories.map((category, index) => (
              <li key={index}>
                <Text variant="h5" className="mb-2">{category.title}</Text>
                <ul className="space-y-2">
                  {category.agents.map((agent, i) => (
                    <li key={i}>
                      <Text variant="body" color="secondary">
                        <a href={agent.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary-dark">
                          {agent.name}
                        </a>
                        : {agent.description}
                      </Text>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </Grid>
  );

  return (
    <CategoryLayout
      title={agentsData.title}
      icon={<Users className="w-5 h-5" />}
      gradientClasses={agentsData.gradientClasses}
      description={agentsData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      
    />
  );
}
