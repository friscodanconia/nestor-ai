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
          <p className="text-base text-gray-800 mb-4">
            AI is rapidly changing and impacting industries and functions. How can marketers use AI tools to improve productivity, idea generation, and a host of other use cases. I have been a CMO before, so I will weave in that experience and suggest ways you can start experimenting with AI tools. AIDA is not dead, but needs a fresher approach.
          </p>
        </div>

        {/* Mobile View - Collapsible Sections */}
        <div className="md:hidden space-y-2">
          <CollapsibleSection title="SEO and ASO" defaultExpanded={true}>
            <p className="text-base text-gray-800">
              AI tools can revolutionize your SEO strategy by analyzing vast amounts of data to identify keywords, optimize content, and predict search trends with unprecedented accuracy.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Brand">
            <p className="text-base text-gray-800">
              Leverage AI to maintain brand consistency across channels, generate on-brand creative assets, and analyze brand sentiment at scale to refine your positioning.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Performance Marketing">
            <p className="text-base text-gray-800">
              AI-powered tools can optimize ad spend, automate A/B testing, and deliver personalized campaigns that dramatically improve conversion rates and ROI.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Social Media">
            <p className="text-base text-gray-800">
              Transform your social media strategy with AI tools that can generate engaging content, identify trending topics, and schedule posts for maximum engagement.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Creative Operations">
            <p className="text-base text-gray-800">
              Streamline your creative workflow with AI that can generate design variations, automate asset production, and ensure brand consistency across all deliverables.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Marketing Analytics">
            <p className="text-base text-gray-800">
              Harness the power of AI to extract actionable insights from complex marketing data, predict customer behavior, and identify opportunities for growth.
            </p>
          </CollapsibleSection>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">SEO and ASO</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                AI tools can revolutionize your SEO strategy by analyzing vast amounts of data to identify keywords, optimize content, and predict search trends with unprecedented accuracy.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Generate keyword clusters and content briefs automatically</li>
                <li className="text-base">Optimize existing content for better search performance</li>
                <li className="text-base">Predict emerging search trends before competitors</li>
                <li className="text-base">Analyze competitor strategies and identify gaps</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Brand</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                Leverage AI to maintain brand consistency across channels, generate on-brand creative assets, and analyze brand sentiment at scale to refine your positioning.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Create consistent brand messaging across all touchpoints</li>
                <li className="text-base">Generate on-brand visual assets and copy</li>
                <li className="text-base">Monitor and analyze brand sentiment in real-time</li>
                <li className="text-base">Identify opportunities to strengthen brand positioning</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Performance Marketing</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                AI-powered tools can optimize ad spend, automate A/B testing, and deliver personalized campaigns that dramatically improve conversion rates and ROI.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Optimize campaign budgets across multiple channels</li>
                <li className="text-base">Create and test ad variations at scale</li>
                <li className="text-base">Deliver hyper-personalized messaging to target segments</li>
                <li className="text-base">Predict campaign performance before launch</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Social Media</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                Transform your social media strategy with AI tools that can generate engaging content, identify trending topics, and schedule posts for maximum engagement.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Generate platform-specific content at scale</li>
                <li className="text-base">Identify trending topics relevant to your audience</li>
                <li className="text-base">Optimize posting schedules for maximum engagement</li>
                <li className="text-base">Analyze performance and refine strategy in real-time</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Creative Operations</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                Streamline your creative workflow with AI that can generate design variations, automate asset production, and ensure brand consistency across all deliverables.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Automate repetitive design tasks and asset creation</li>
                <li className="text-base">Generate multiple creative variations for testing</li>
                <li className="text-base">Ensure brand consistency across all assets</li>
                <li className="text-base">Streamline approval workflows and collaboration</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Marketing Analytics</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                Harness the power of AI to extract actionable insights from complex marketing data, predict customer behavior, and identify opportunities for growth.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Uncover hidden patterns in marketing performance data</li>
                <li className="text-base">Predict customer behavior and lifetime value</li>
                <li className="text-base">Identify high-potential segments for targeting</li>
                <li className="text-base">Generate automated reports with actionable insights</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}