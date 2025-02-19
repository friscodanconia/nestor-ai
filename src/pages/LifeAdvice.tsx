import { useState } from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollapsibleSection from '../components/CollapsibleSection';

export default function LifeAdvice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-emerald-200">
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Agents</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Understanding AI Agents</h2>
        <p className="text-base text-gray-700 mb-8">
          Everyone's talking about AI agents - but what exactly are they? Simply put, they're smart software programs that can work on their own to get things done, making decisions and taking actions just like a personal assistant would.
        </p>

        {/* Mobile View - Collapsible Sections */}
        <div className="md:hidden space-y-2">
          <CollapsibleSection title="What makes them special?" defaultExpanded={true}>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                While many apps use AI, not all are true "agents." What sets agents apart is their autonomy - they can work across multiple tools and figure out the steps needed to complete your tasks. They understand context, learn from experience, and actively work toward your goals without needing step-by-step instructions.
              </p>
              <ul className="list-disc pl-5 space-y-4">
                <li className="space-y-2">
                  <a 
                    href="https://www.loom.com/share/c4c00d22fbde43e88899dc93ae83066a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-gray-700 underline hover:text-emerald-800"
                  >
                    Book a restaurant for dinner
                  </a>
                  <p className="text-sm text-gray-600">
                    An agent can check your calendar, find nearby eateries, compare reviews, and make a reservation—all with minimal input from you.
                  </p>
                </li>
                <li className="space-y-2">
                  <a 
                    href="https://www.loom.com/share/acfd836b9f2c4948b971349e960d6330?sid=9b9f08dd-7a1b-4444-932f-a5fe11fc24d5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-gray-700 underline hover:text-emerald-800"
                  >
                    Shop at Amazon more efficiently
                  </a>
                  <p className="text-sm text-gray-600">
                    An agent can remember your previous purchases, search for best deals, and even add items to your cart when you run low.
                  </p>
                </li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Types of Agents">
            <div className="space-y-4">
              <ol className="list-decimal space-y-6 pl-5">
                <li>
                  <p className="font-semibold mb-2">Chat-Based Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Interact via text (or sometimes voice) to answer questions or draft content.</li>
                    <li>Examples: <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">ChatGPT</a>, <a href="https://pi.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Pi by Inflection AI</a>.</li>
                    <li>Autonomy Level: Low to Moderate (They respond to your prompts but won't usually initiate tasks on their own.)</li>
                    <li>Use Case: Quick Q&A, writing assistance, brainstorming ideas.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Voice Assistants</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Hands-free helpers triggered by spoken commands.</li>
                    <li>Examples: <a href="https://www.apple.com/siri/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Siri</a>, <a href="https://alexa.amazon.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Alexa</a>, <a href="https://assistant.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Google Assistant</a>.</li>
                    <li>Autonomy Level: Mostly Low (They integrate services but largely wait for user commands.)</li>
                    <li>Use Case: Simple tasks like timers, reminders, and smart home control.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Task/Workflow Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Automate multi-step processes (e.g., sorting emails, scheduling).</li>
                    <li>Examples: <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Zapier</a>, <a href="https://github.com/Significant-Gravitas/Auto-GPT" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Auto-GPT</a>.</li>
                    <li>Autonomy Level: Variable (Basic automations run in the background; advanced setups can plan and execute tasks with minimal user input.)</li>
                    <li>Use Case: Busy professionals who want "set-it-and-forget-it" automation across apps.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Knowledge-Centric Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Index and analyze your data (docs, notes) to surface insights—even without direct prompts.</li>
                    <li>Examples: <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Notebook LM</a>, <a href="https://granola.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Granola</a>.</li>
                    <li>Autonomy Level: Higher (They proactively learn from your data and can offer relevant info on their own.)</li>
                    <li>Use Case: Heavy document management or research, where proactive AI support is essential.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Getting Started">
            <div className="space-y-4">
              <ol className="list-decimal space-y-6 pl-5">
                <li>
                  <p className="font-semibold mb-2">Try No-Code Tools</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Why: Quickly build simple AI automations without coding.</li>
                    <li>Examples:</li>
                    <li><a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Zapier</a> or <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Make</a>: Automate tasks (e.g., auto-save email attachments to Google Drive).</li>
                    <li><a href="https://proxyconvergence.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Proxy Convergence</a>: An AI platform that helps unify financial/shopping data and can be connected to other apps with minimal setup.</li>
                    <li>Tip: Add an AI API (like OpenAI) to handle text-based tasks (summaries, recommendations).</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Use a Ready-Made AI Platform</p>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="https://abacus.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Abacus.AI</a>: I built a "Topic Research" agent where you can enter a company name and it will give information about other companies in the industry, both private and public companies - a service for which you would pay subscription fees currently.</li>
                    <li><a href="https://personal.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Personal.ai</a> or <a href="https://agentgpt.reworkd.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">AgentGPT</a>: Ideal for more autonomous behavior (multi-step tasks or personalized assistance).</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Explore Developer Frameworks</p>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">LangChain</a>: Chains prompts/tools for complex LLM workflows; best for Python-savvy users.</li>
                    <li><a href="https://agpt.co" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Auto-GPT</a>: Shows how GPT can plan and execute multi-step goals on its own.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Check Out Public Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Here is a collection of agents that you can find on <a href="https://github.com/Shubhamsaboo/awesome-llm-apps" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Github</a> where you find code, snippets, implementation examples. You can also search <a href="https://agpt.co" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Auto GPT</a> to see what is getting built.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Start Small, Then Iterate</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Automate a simple routine first (like summarizing emails).</li>
                    <li>Add more features or data sources over time.</li>
                    <li>Focus on privacy: always confirm where data is stored or shared.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </CollapsibleSection>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              What makes them special?
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                While many apps use AI, not all are true "agents." What sets agents apart is their autonomy - they can work across multiple tools and figure out the steps needed to complete your tasks. They understand context, learn from experience, and actively work toward your goals without needing step-by-step instructions.
              </p>
              <ul className="list-disc pl-5 space-y-4">
                <li className="space-y-2">
                  <a 
                    href="https://www.loom.com/share/c4c00d22fbde43e88899dc93ae83066a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-gray-700 underline hover:text-emerald-800"
                  >
                    Book a restaurant for dinner
                  </a>
                  <p className="text-sm text-gray-600">
                    An agent can check your calendar, find nearby eateries, compare reviews, and make a reservation—all with minimal input from you.
                  </p>
                </li>
                <li className="space-y-2">
                  <a 
                    href="https://www.loom.com/share/acfd836b9f2c4948b971349e960d6330?sid=9b9f08dd-7a1b-4444-932f-a5fe11fc24d5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-gray-700 underline hover:text-emerald-800"
                  >
                    Shop at Amazon more efficiently
                  </a>
                  <p className="text-sm text-gray-600">
                    An agent can remember your previous purchases, search for best deals, and even add items to your cart when you run low.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Types of Agents
            </h3>
            <div className="space-y-4">
              <ol className="list-decimal space-y-6 pl-5">
                <li>
                  <p className="font-semibold mb-2">Chat-Based Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Interact via text (or sometimes voice) to answer questions or draft content.</li>
                    <li>Examples: <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">ChatGPT</a>, <a href="https://pi.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Pi by Inflection AI</a>.</li>
                    <li>Autonomy Level: Low to Moderate (They respond to your prompts but won't usually initiate tasks on their own.)</li>
                    <li>Use Case: Quick Q&A, writing assistance, brainstorming ideas.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Voice Assistants</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Hands-free helpers triggered by spoken commands.</li>
                    <li>Examples: <a href="https://www.apple.com/siri/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Siri</a>, <a href="https://alexa.amazon.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Alexa</a>, <a href="https://assistant.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Google Assistant</a>.</li>
                    <li>Autonomy Level: Mostly Low (They integrate services but largely wait for user commands.)</li>
                    <li>Use Case: Simple tasks like timers, reminders, and smart home control.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Task/Workflow Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Automate multi-step processes (e.g., sorting emails, scheduling).</li>
                    <li>Examples: <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Zapier</a>, <a href="https://github.com/Significant-Gravitas/Auto-GPT" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Auto-GPT</a>.</li>
                    <li>Autonomy Level: Variable (Basic automations run in the background; advanced setups can plan and execute tasks with minimal user input.)</li>
                    <li>Use Case: Busy professionals who want "set-it-and-forget-it" automation across apps.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Knowledge-Centric Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What: Index and analyze your data (docs, notes) to surface insights—even without direct prompts.</li>
                    <li>Examples: <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Notebook LM</a>, <a href="https://granola.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">Granola</a>.</li>
                    <li>Autonomy Level: Higher (They proactively learn from your data and can offer relevant info on their own.)</li>
                    <li>Use Case: Heavy document management or research, where proactive AI support is essential.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Getting Started
            </h3>
            <div className="space-y-4">
              <ol className="list-decimal space-y-6 pl-5">
                <li>
                  <p className="font-semibold mb-2">Try No-Code Tools</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Why: Quickly build simple AI automations without coding.</li>
                    <li>Examples:</li>
                    <li><a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Zapier</a> or <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Make</a>: Automate tasks (e.g., auto-save email attachments to Google Drive).</li>
                    <li><a href="https://proxyconvergence.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Proxy Convergence</a>: An AI platform that helps unify financial/shopping data and can be connected to other apps with minimal setup.</li>
                    <li>Tip: Add an AI API (like OpenAI) to handle text-based tasks (summaries, recommendations).</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Use a Ready-Made AI Platform</p>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="https://abacus.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Abacus.AI</a>: I built a "Topic Research" agent where you can enter a company name and it will give information about other companies in the industry, both private and public companies - a service for which you would pay subscription fees currently.</li>
                    <li><a href="https://personal.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Personal.ai</a> or <a href="https://agentgpt.reworkd.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">AgentGPT</a>: Ideal for more autonomous behavior (multi-step tasks or personalized assistance).</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Explore Developer Frameworks</p>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">LangChain</a>: Chains prompts/tools for complex LLM workflows; best for Python-savvy users.</li>
                    <li><a href="https://agpt.co" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Auto-GPT</a>: Shows how GPT can plan and execute multi-step goals on its own.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Check Out Public Agents</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Here is a collection of agents that you can find on <a href="https://github.com/Shubhamsaboo/awesome-llm-apps" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Github</a> where you find code, snippets, implementation examples. You can also search <a href="https://agpt.co" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-emerald-800">Auto GPT</a> to see what is getting built.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold mb-2">Start Small, Then Iterate</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Automate a simple routine first (like summarizing emails).</li>
                    <li>Add more features or data sources over time.</li>
                    <li>Focus on privacy: always confirm where data is stored or shared.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}