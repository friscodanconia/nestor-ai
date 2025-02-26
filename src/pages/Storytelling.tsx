import { useState } from 'react';
import { AppWindow, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollapsibleSection from '../components/CollapsibleSection';

export default function Storytelling() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-rose-200">
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <AppWindow className="w-5 h-5" />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Apps</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Navigating the AI Revolution: Your Curated Guide</h2>
          <p className="text-sm text-gray-800 mb-4">
            The AI landscape evolves at breakneck speed, with new models and applications emerging weekly. Rather than attempting the impossible task of cataloging everything, we've created this carefully curated selection of the most impactful AI tools and developments.
          </p>
          <div className="mt-4 text-sm text-gray-700">
            <p>Last updated: February 25, 2025</p>
            <p>Have a suggestion? <a href="mailto:nestorguide@gmail.com" className="hover:text-rose-800">mail us nestorguide@gmail.com</a></p>
          </div>
        </div>

        {/* Mobile View - Collapsible Sections */}
        <div className="md:hidden space-y-2">
          <CollapsibleSection title="What to expect" defaultExpanded={true}>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>Regular updates: This guide is refreshed bi-weekly</li>
              <li>Focus on quality: We prioritize tools with practical applications over novelty</li>
              <li>Historical archive: Retired entries move to our comprehensive archive section below</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="ChatGPT">
            <p className="text-sm text-gray-800">
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">ChatGPT</a> - The most dominant product so far with 400M users on a weekly basis. Free to use, but a lot of powerful features are gated behind subscriptions.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Claude">
            <p className="text-sm text-gray-800">
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Claude</a> - This is my personal favorite model for coding. Now, I am a novice coder, so take my advice with a pinch of salt. But veteran programmers swear by it, so maybe there is some truth here. It is also great for writing and allows for some cool things like Model Context Protocol (MCP, will cover in detail in other sections).
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Replika">
            <p className="text-sm text-gray-800">
              <a href="https://replika.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Replika</a> - An AI companion app that you can chat, talk, or even have video calls with. It is an interesting experience and can see it getting more popularity (already has 200K+ reviews).
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Other AI Assistants">
            <p className="text-sm text-gray-800">
              Honorable mentions - <a href="https://x.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Grok</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Claude</a>, and <a href="https://character.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Character.ai</a> are the other notable ones in this category.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Perplexity">
            <p className="text-sm text-gray-800">
              <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Perplexity</a> - This is now my go-to search tool; they iterate super fast and add great features. If you want to pay for one subscription ($20/month), this is one to get. They have also integrated Deepseek without censorship under their hood. I don't remember last time I used Google to look for anything.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Grammarly">
            <p className="text-sm text-gray-800">
              <a href="https://grammarly.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Grammarly</a> is a really great tool, which is a writing assistant that can check your grammar, style suggestions, and many other use cases.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="QuillBot">
            <p className="text-sm text-gray-800">
              <a href="https://quillbot.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">QuillBot</a> is a great writing assistant that can check grammar and plagiarism, has an AI detector mode, and can summarize. It also has a helpful Chrome extension and a native Mac app. Some features are price-gated.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Granola">
            <p className="text-sm text-gray-800">
              <a href="https://granola.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Granola</a> is one of the most popular note-taking apps for meetings and can transform meeting notes into great summaries. Super popular, great U/X, needs work email to sign up and use.
            </p>
          </CollapsibleSection>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          <div>
            <div className="space-y-4">
              <p className="text-sm text-gray-800">
                <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">ChatGPT</a> - The most dominant product so far with 400M users on a weekly basis. Free to use, but a lot of powerful features are gated behind subscriptions.
              </p>
              <p className="text-sm text-gray-800">
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Claude</a> - This is my personal favorite model for coding. Now, I am a novice coder, so take my advice with a pinch of salt. But veteran programmers swear by it, so maybe there is some truth here. It is also great for writing and allows for some cool things like Model Context Protocol (MCP, will cover in detail in other sections).
              </p>
              <p className="text-sm text-gray-800">
                <a href="https://replika.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Replika</a> - An AI companion app that you can chat, talk, or even have video calls with. It is an interesting experience and can see it getting more popularity (already has 200K+ reviews).
              </p>
              <p className="text-sm text-gray-800">
                Honorable mentions - <a href="https://x.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Grok</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Claude</a>, and <a href="https://character.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Character.ai</a> are the other notable ones in this category.
              </p>
              <p className="text-sm text-gray-800">
                <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Perplexity</a> - This is now my go-to search tool; they iterate super fast and add great features. If you want to pay for one subscription ($20/month), this is one to get. They have also integrated Deepseek without censorship under their hood. I don't remember last time I used Google to look for anything.
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <p className="text-sm text-gray-800">
                <a href="https://grammarly.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Grammarly</a> is a really great tool, which is a writing assistant that can check your grammar, style suggestions, and many other use cases.
              </p>
              <p className="text-sm text-gray-800">
                <a href="https://quillbot.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">QuillBot</a> is a great writing assistant that can check grammar and plagiarism, has an AI detector mode, and can summarize. It also has a helpful Chrome extension and a native Mac app. Some features are price-gated.
              </p>
              <p className="text-sm text-gray-800">
                <a href="https://granola.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-800">Granola</a> is one of the most popular note-taking apps for meetings and can transform meeting notes into great summaries. Super popular, great U/X, needs work email to sign up and use.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Productivity Apps</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Boost your efficiency with AI-powered productivity tools that streamline your workflow and automate repetitive tasks.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Task management and organization</li>
                <li className="text-base">Smart scheduling and calendar optimization</li>
                <li className="text-base">Document processing and automation</li>
                <li className="text-base">Email management and response automation</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Creative Tools</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Unlock your creative potential with AI-assisted design, content creation, and artistic tools.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">AI-powered design assistance</li>
                <li className="text-base">Content generation and enhancement</li>
                <li className="text-base">Image and video editing</li>
                <li className="text-base">Music and audio creation</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Collaboration Platforms</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Transform team collaboration with intelligent platforms that enhance communication and project management.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Smart project management tools</li>
                <li className="text-base">AI-enhanced team communication</li>
                <li className="text-base">Document collaboration and version control</li>
                <li className="text-base">Virtual workspace solutions</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">AI-Powered Applications</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Discover specialized applications that use AI to solve specific problems and enhance particular workflows.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="text-base">Industry-specific solutions</li>
                <li className="text-base">Custom workflow automation</li>
                <li className="text-base">Data analysis and visualization</li>
                <li className="text-base">Decision support systems</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}