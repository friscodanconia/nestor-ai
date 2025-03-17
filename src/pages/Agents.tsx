import { Users } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import { agentsData } from '../data/categories/agents';

export default function Agents() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <CollapsibleSection title="What makes them special?" defaultExpanded={true}>
        <div className="space-y-4">
          <p className="text-base text-gray-700">
            {agentsData.specialFeatures.description}
          </p>
          <ul className="list-disc pl-5 space-y-4">
            {agentsData.specialFeatures.examples.map((example, index) => (
              <li key={index} className="space-y-2">
                <a 
                  href={example.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-700 underline hover:text-emerald-800"
                >
                  {example.title}
                </a>
                <p className="text-sm text-gray-600">
                  {example.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Types of Agents">
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.agentTypes.map((type, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{type.title}</p>
                <ul className="space-y-2 text-gray-700">
                  <li>What: {type.description}</li>
                  <li>Examples: {type.examples.map((example, i) => (
                    <span key={i}>
                      {i > 0 && ', '}
                      <a href={example.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">
                        {example.name}
                      </a>
                    </span>
                  ))}.</li>
                  <li>Autonomy Level: {type.autonomyLevel}</li>
                  <li>Use Case: {type.useCase}</li>
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Getting Started">
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.gettingStarted.map((step, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{step.title}</p>
                <ul className="space-y-2 text-gray-700">
                  {step.description && <li>{step.description}</li>}
                  {step.examples && step.examples.map((example, i) => (
                    <li key={i}>
                      <a href={example.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">
                        {example.name}
                      </a>
                      {example.description && `: ${example.description}`}
                    </li>
                  ))}
                  {step.tips && step.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="What tools can you use">
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.toolCategories.map((category, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{category.title}</p>
                <ul className="space-y-2 text-gray-700">
                  {category.tools.map((tool, i) => (
                    <li key={i}>
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">
                        {tool.name}
                      </a>
                      : {tool.description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Sample Prebuilt Agents">
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.prebuiltAgentCategories.map((category, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{category.title}</p>
                <ul className="space-y-2 text-gray-700">
                  {category.agents.map((agent, i) => (
                    <li key={i}>
                      <a href={agent.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">
                        {agent.name}
                      </a>
                      : {agent.description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </CollapsibleSection>
    </>
  );

  // Desktop content
  const desktopContent = (
    <>
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          What makes them special?
        </h3>
        <div className="space-y-4">
          <p className="text-base text-gray-700">
            {agentsData.specialFeatures.description}
          </p>
          <ul className="list-disc pl-5 space-y-4">
            {agentsData.specialFeatures.examples.map((example, index) => (
              <li key={index} className="space-y-2">
                <a 
                  href={example.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-700 underline hover:text-emerald-800"
                >
                  {example.title}
                </a>
                <p className="text-sm text-gray-600">
                  {example.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Types of Agents
        </h3>
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.agentTypes.map((type, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{type.title}</p>
                <ul className="space-y-2 text-gray-700">
                  <li>What: {type.description}</li>
                  <li>Examples: {type.examples.map((example, i) => (
                    <span key={i}>
                      {i > 0 && ', '}
                      <a href={example.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">
                        {example.name}
                      </a>
                    </span>
                  ))}.</li>
                  <li>Autonomy Level: {type.autonomyLevel}</li>
                  <li>Use Case: {type.useCase}</li>
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Getting Started
        </h3>
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.gettingStarted.map((step, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{step.title}</p>
                <ul className="space-y-2 text-gray-700">
                  {step.description && <li>{step.description}</li>}
                  {step.examples && step.examples.map((example, i) => (
                    <li key={i}>
                      <a href={example.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">
                        {example.name}
                      </a>
                      {example.description && `: ${example.description}`}
                    </li>
                  ))}
                  {step.tips && step.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          What tools can you use
        </h3>
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.toolCategories.map((category, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{category.title}</p>
                <ul className="space-y-2 text-gray-700">
                  {category.tools.map((tool, i) => (
                    <li key={i}>
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">
                        {tool.name}
                      </a>
                      : {tool.description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Sample Prebuilt Agents
        </h3>
        <div className="space-y-4">
          <ol className="list-decimal space-y-6 pl-5">
            {agentsData.prebuiltAgentCategories.map((category, index) => (
              <li key={index}>
                <p className="font-semibold mb-2">{category.title}</p>
                <ul className="space-y-2 text-gray-700">
                  {category.agents.map((agent, i) => (
                    <li key={i}>
                      <a href={agent.url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">
                        {agent.name}
                      </a>
                      : {agent.description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
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
