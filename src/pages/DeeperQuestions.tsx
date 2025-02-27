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
          <CollapsibleSection title="Content Creation" defaultExpanded={true}>
            <ul className="list-disc list-inside text-base text-gray-800 space-y-1">
              <li>AI-powered copywriting tools</li>
              <li>Image and video generation for campaigns</li>
              <li>Personalized content at scale</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Market Research">
            <p className="text-base text-gray-800">
              AI tools can analyze vast amounts of market data to identify trends, consumer preferences, and competitive insights faster than traditional methods.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Customer Segmentation">
            <p className="text-base text-gray-800">
              Advanced AI algorithms can identify nuanced customer segments based on behavior patterns that might be missed in conventional analysis.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Campaign Optimization">
            <p className="text-base text-gray-800">
              AI can continuously test and refine marketing campaigns, adjusting messaging, creative elements, and targeting parameters in real-time.
            </p>
          </CollapsibleSection>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Content Creation</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                AI-powered tools are revolutionizing how marketers create content, from generating copy and headlines to designing visuals and videos.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Generate campaign ideas and creative concepts</li>
                <li className="text-base">Create and optimize ad copy for different platforms</li>
                <li className="text-base">Design visual assets with text-to-image tools</li>
                <li className="text-base">Produce video content with minimal resources</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Market Research</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                AI tools can analyze vast amounts of market data to identify trends, consumer preferences, and competitive insights faster than traditional methods.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Analyze competitor strategies and positioning</li>
                <li className="text-base">Identify emerging market trends</li>
                <li className="text-base">Process customer feedback at scale</li>
                <li className="text-base">Generate comprehensive market reports</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Segmentation</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                Advanced AI algorithms can identify nuanced customer segments based on behavior patterns that might be missed in conventional analysis.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Create detailed buyer personas</li>
                <li className="text-base">Predict customer lifetime value</li>
                <li className="text-base">Identify high-potential conversion opportunities</li>
                <li className="text-base">Develop targeted messaging for each segment</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Campaign Optimization</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-800">
                AI can continuously test and refine marketing campaigns, adjusting messaging, creative elements, and targeting parameters in real-time.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Optimize ad spend across channels</li>
                <li className="text-base">A/B test multiple variables simultaneously</li>
                <li className="text-base">Personalize customer journeys at scale</li>
                <li className="text-base">Predict campaign performance before launch</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}