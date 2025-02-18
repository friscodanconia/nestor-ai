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

          <CollapsibleSection title="How Agents Work">
            <div className="space-y-4">
              <ol className="list-decimal space-y-4 pl-5">
                <li className="text-base text-gray-700">
                  <strong>Break Down Your Goal.</strong> You say, "Plan my trip." The agent splits that into steps: check flights, find hotels, compare prices.
                </li>
                <li className="text-base text-gray-700">
                  <strong>Connect to Apps or Websites.</strong> Where APIs exist, it queries them directly. Otherwise, it "browses" like a human (e.g., using Operator) to scrape data and fill forms.
                </li>
                <li className="text-base text-gray-700">
                  <strong>AI Reasoning & Adaptation.</strong> If a hotel is booked, it looks for alternatives—learning your preferences (like budget or location) along the way.
                </li>
                <li className="text-base text-gray-700">
                  <strong>Use Tools to Execute.</strong> Agents rely on frameworks (like <a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">LangChain</a>) or autonomous tools (like <a href="https://github.com/Significant-Gravitas/Auto-GPT" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Auto-GPT</a>) to structure tasks. They can also plug into browser automation or app integrations to handle everything from sending emails to updating calendars.
                </li>
                <li className="text-base text-gray-700">
                  <strong>Remember & Personalize.</strong> Each interaction refines the agent's understanding of you—improving recommendations and saving you from repeating yourself.
                </li>
              </ol>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Use Cases">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">1. Personal Productivity</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Email overload, calendar chaos, missed to-dos</li>
                  <li>Agent's Role: Filter important messages, schedule meetings, remind you of deadlines</li>
                  <li>Examples: <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Zapier</a> automates repetitive tasks between apps (e.g., Slack, Gmail, Trello), <a href="https://www.usemotion.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Motion</a> is an AI-driven scheduling that automatically updates your calendar to optimize focus time.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Shopping & Budgeting</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Time-consuming price checks, repetitive ordering, overspending</li>
                  <li>Agent's Role: Track favorite products, compare deals, restock essentials, and send budget alerts</li>
                  <li>Specific Examples: <a href="https://www.meetcleo.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Cleo</a> is an AI budgeting buddy that provides spending insights and saving tips, <a href="https://www.empower.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Empower</a> tracks finances, offers personalized advice, and can nudge you on upcoming bills.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Learning & Research</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Sifting through endless docs or articles, summarizing complex info</li>
                  <li>Agent's Role: Pull key insights, highlight relevant data, and answer follow-up questions</li>
                  <li>Specific Examples: <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Notebook LM</a> analyzes your Google Docs to provide summaries and connections, <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Perplexity AI</a> combines web search with AI-powered summaries, referencing sources directly.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Health & Wellness</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Forgetting workouts, unhealthy eating habits, lack of motivation</li>
                  <li>Agent's Role: Suggest meal plans, track exercise routines, offer mental health tips</li>
                  <li>Specific Examples: <a href="https://www.wysa.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Wysa</a> is an AI mental health chatbot that offers emotional support exercises, <a href="https://www.fitbod.me" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Fitbod</a> uses your workout data to suggest tailored exercise routines.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">5. Creative Brainstorming</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Writer's block, idea generation, visual design concepts</li>
                  <li>Agent's Role: Draft outlines, propose ideas, or generate art</li>
                  <li>Specific Examples: <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">ChatGPT</a> offers quick text-based brainstorming and writing help, <a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Midjourney</a> creates AI-generated images from text prompts, sparking visual inspiration.</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Getting Started">
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                [Content for Getting Started section]
              </p>
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
              How Agents Work
            </h3>
            <div className="space-y-4">
              <ol className="list-decimal space-y-4 pl-5">
                <li className="text-base text-gray-700">
                  <strong>Break Down Your Goal.</strong> You say, "Plan my trip." The agent splits that into steps: check flights, find hotels, compare prices.
                </li>
                <li className="text-base text-gray-700">
                  <strong>Connect to Apps or Websites.</strong> Where APIs exist, it queries them directly. Otherwise, it "browses" like a human (e.g., using Operator) to scrape data and fill forms.
                </li>
                <li className="text-base text-gray-700">
                  <strong>AI Reasoning & Adaptation.</strong> If a hotel is booked, it looks for alternatives—learning your preferences (like budget or location) along the way.
                </li>
                <li className="text-base text-gray-700">
                  <strong>Use Tools to Execute.</strong> Agents rely on frameworks (like <a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">LangChain</a>) or autonomous tools (like <a href="https://github.com/Significant-Gravitas/Auto-GPT" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Auto-GPT</a>) to structure tasks. They can also plug into browser automation or app integrations to handle everything from sending emails to updating calendars.
                </li>
                <li className="text-base text-gray-700">
                  <strong>Remember & Personalize.</strong> Each interaction refines the agent's understanding of you—improving recommendations and saving you from repeating yourself.
                </li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Use Cases
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">1. Personal Productivity</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Email overload, calendar chaos, missed to-dos</li>
                  <li>Agent's Role: Filter important messages, schedule meetings, remind you of deadlines</li>
                  <li>Examples: <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Zapier</a> automates repetitive tasks between apps (e.g., Slack, Gmail, Trello), <a href="https://www.usemotion.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Motion</a> is an AI-driven scheduling that automatically updates your calendar to optimize focus time.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Shopping & Budgeting</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Time-consuming price checks, repetitive ordering, overspending</li>
                  <li>Agent's Role: Track favorite products, compare deals, restock essentials, and send budget alerts</li>
                  <li>Specific Examples: <a href="https://www.meetcleo.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Cleo</a> is an AI budgeting buddy that provides spending insights and saving tips, <a href="https://www.empower.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Empower</a> tracks finances, offers personalized advice, and can nudge you on upcoming bills.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Learning & Research</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Sifting through endless docs or articles, summarizing complex info</li>
                  <li>Agent's Role: Pull key insights, highlight relevant data, and answer follow-up questions</li>
                  <li>Specific Examples: <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Notebook LM</a> analyzes your Google Docs to provide summaries and connections, <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Perplexity AI</a> combines web search with AI-powered summaries, referencing sources directly.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Health & Wellness</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Forgetting workouts, unhealthy eating habits, lack of motivation</li>
                  <li>Agent's Role: Suggest meal plans, track exercise routines, offer mental health tips</li>
                  <li>Specific Examples: <a href="https://www.wysa.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Wysa</a> is an AI mental health chatbot that offers emotional support exercises, <a href="https://www.fitbod.me" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Fitbod</a> uses your workout data to suggest tailored exercise routines.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">5. Creative Brainstorming</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>What It Solves: Writer's block, idea generation, visual design concepts</li>
                  <li>Agent's Role: Draft outlines, propose ideas, or generate art</li>
                  <li>Specific Examples: <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">ChatGPT</a> offers quick text-based brainstorming and writing help, <a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-emerald-800">Midjourney</a> creates AI-generated images from text prompts, sparking visual inspiration.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Getting Started
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                [Content for Getting Started section]
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}