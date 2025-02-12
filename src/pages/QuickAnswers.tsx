import React from 'react';
import { Wrench, ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function QuickAnswers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200">
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Top Tools</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">Best No-Code Tools</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-800 leading-snug sm:leading-relaxed">
          No-code tools are software solutions that allow you to create applications, websites, automate processes without writing traditional computer code. They help reach out to a broader audience including non-technical users. There is a plethora of tools and new ones get introduced every day, so this page will be regularly updated.
        </p>
        <div className="space-y-4 sm:space-y-6 text-gray-800">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              <a href="/quick-answers/website-app-builders" className="group flex items-center hover:text-blue-800">
                Website and App Builders
                <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Webflow</a>,{' '}
              <a href="https://www.adalo.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Adalo</a>,{' '}
              <a href="https://thunkable.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Thunkable</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              <a href="/quick-answers/ai-builders" className="group flex items-center hover:text-blue-800">
                AI-Powered App and Website Builders
                <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Bolt.new</a>,{' '}
              <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">lovable.dev</a>,{' '}
              <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">v0 by Vercel</a>,{' '}
              <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Replit</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              <a href="/quick-answers/workflow-automation" className="group flex items-center hover:text-blue-800">
                Workflow Automation
                <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Zapier</a>,{' '}
              <a href="https://automate.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Automate.io</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              <a href="/quick-answers/chatbot-interfaces" className="group flex items-center hover:text-blue-800">
                Chatbot and Conversational Interfaces
                <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              <a href="https://landbot.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Landbot</a>,{' '}
              <a href="https://manychat.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">ManyChat</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              <a href="/quick-answers/voice-technology" className="group flex items-center hover:text-blue-800">
                Voice Technology
                <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              <a href="https://www.voiceflow.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Voiceflow</a>,{' '}
              <a href="https://otter.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">otter.ai</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}