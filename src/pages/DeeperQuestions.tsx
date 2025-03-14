import { useState } from 'react';
import { UserRound, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollapsibleSection from '../components/CollapsibleSection';

export default function DeeperQuestions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200">
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <UserRound className="w-5 h-5" />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">AI in Marketing</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">AI in Marketing</h2>
          <p className="text-base text-gray-800 mb-4 text-justify">
            AI is rapidly changing and impacting industries and functions. How can marketers use AI tools to improve productivity, idea generation, and a host of other use cases. I have been a CMO before, so I will weave in that experience and suggest ways you can start experimenting with AI tools. AIDA is not dead, but needs a fresher approach.
          </p>
        </div>

        {/* Mobile View - Collapsible Sections */}
        <div className="md:hidden space-y-2">
          <CollapsibleSection title="Traffic Analysis" defaultExpanded={true}>
            <p className="text-base text-gray-800 text-justify">
              LLM traffic is a tale of two cities. LLM traffic has jumped 800%, but LLM's encounter zero click phenomenon where many users read answers in chatbot interface. As a marketer, you have to do both. First understand, how much traffic is coming from LLMs (top three drive 80%) and second, how do you rank for your top queries? Read more indepth strategies here.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Business Ranking">
            <p className="text-base text-gray-800 text-justify">
              LLMs use a combination of training data & mentions, semantic relevance, traditional SEO signals, frequency and confidence, and user intent + context as foundational mechanisms to rank brands in query results. Brands can improve their ranking by using question based formats (FAQs, detailed blogs), topic clusters, proprietary data, and schema markups to stay relevant. In cases where LLMs don't use RAG, brands should check content ranking for both cutoff dates and real-time indexes. For a detailed strategy, read more here.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Competitor Research">
            <p className="text-base text-gray-800 text-justify">
              Leverage AI tools to conduct comprehensive competitor research. Analyze market positioning, content strategies, and digital presence to gain a competitive edge.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="ASO Strategy">
            <p className="text-base text-gray-800 text-justify">
              Build better App Store Optimization plans using AI-powered tools. Learn how to improve app visibility and conversion rates through data-driven insights and automated optimization.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Agency Efficiency">
            <p className="text-base text-gray-800 text-justify">
              Transform agency operations with AI automation. Streamline workflows, enhance client deliverables, and improve team productivity through intelligent tools and processes.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Campaign Building">
            <p className="text-base text-gray-800 text-justify">
              Explore AI-powered campaign creation and optimization. From content generation to audience targeting, discover how AI can enhance your campaign performance.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Social Media Automation">
            <p className="text-base text-gray-800 text-justify">
              Scale your social media presence through intelligent automation. Learn about AI tools for content scheduling, engagement monitoring, and performance optimization.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Marketing Analytics">
            <p className="text-base text-gray-800 text-justify">
              The future of marketing analytics is being transformed by AI. Discover how predictive analytics, automated reporting, and intelligent insights can drive better marketing decisions.
            </p>
          </CollapsibleSection>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Traffic Analysis</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                LLM traffic is a tale of two cities. LLM traffic has jumped 800%, but LLM's encounter zero click phenomenon where many users read answers in chatbot interface. As a marketer, you have to do both. First understand, how much traffic is coming from LLMs (top three drive 80%) and second, how do you rank for your top queries? Read more indepth strategies here.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Business Ranking</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                LLMs use a combination of training data & mentions, semantic relevance, traditional SEO signals, frequency and confidence, and user intent + context as foundational mechanisms to rank brands in query results. Brands can improve their ranking by using question based formats (FAQs, detailed blogs), topic clusters, proprietary data, and schema markups to stay relevant. In cases where LLMs don't use RAG, brands should check content ranking for both cutoff dates and real-time indexes. For a detailed strategy, read more here.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Competitor Research</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                Leverage AI tools to conduct comprehensive competitor research. Analyze market positioning, content strategies, and digital presence to gain a competitive edge.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">ASO Strategy</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                Build better App Store Optimization plans using AI-powered tools. Learn how to improve app visibility and conversion rates through data-driven insights and automated optimization.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Agency Efficiency</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                Transform agency operations with AI automation. Streamline workflows, enhance client deliverables, and improve team productivity through intelligent tools and processes.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Campaign Building</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                Explore AI-powered campaign creation and optimization. From content generation to audience targeting, discover how AI can enhance your campaign performance.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Social Media Automation</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                Scale your social media presence through intelligent automation. Learn about AI tools for content scheduling, engagement monitoring, and performance optimization.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Marketing Analytics</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800 text-justify">
                The future of marketing analytics is being transformed by AI. Discover how predictive analytics, automated reporting, and intelligent insights can drive better marketing decisions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}