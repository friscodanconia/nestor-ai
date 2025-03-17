import React from 'react';
import { Wrench, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TopTools() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200">
      <header className="p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/quick-answers')}
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

      <main className="max-w-2xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Top Picks</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          AI tools are everywhere these days - and it can get overwhelming to pick the right ones. We're focusing on tools for regular users like us, since enterprises need different things (like security certifications, user management, and API access). Whether you're looking for free tools to play around with or affordable premium options, there's something for everyone. We've spent countless hours testing these tools ourselves, and here's our honest take on the ones that actually deliver results. Since AI moves fast, we'll keep this guide fresh with new finds and updates.
        </p>
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
          <ul className="space-y-6 text-gray-800">
            <li>
              <h3 className="font-semibold mb-2">Website and App Builders</h3>
              <p className="text-gray-700 mb-2">
                <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Webflow</a>,{' '}
                <a href="https://www.adalo.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Adalo</a>,{' '}
                <a href="https://thunkable.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Thunkable</a>
              </p>
            </li>
            <li>
              <h3 className="font-semibold mb-2">AI-Powered App and Website Builders</h3>
              <p className="text-gray-700 mb-2">
                <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Bolt.new</a>,{' '}
                <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">lovable.dev</a>,{' '}
                <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">v0 by Vercel</a>
              </p>
            </li>
            <li>
              <h3 className="font-semibold mb-2">Workflow Automation</h3>
              <p className="text-gray-700 mb-2">
                <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Zapier</a>,{' '}
                <a href="https://automate.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Automate.io</a>
              </p>
            </li>
            <li>
              <h3 className="font-semibold mb-2">Chatbot and Conversational Interfaces</h3>
              <p className="text-gray-700 mb-2">
                <a href="https://landbot.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Landbot</a>,{' '}
                <a href="https://manychat.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">ManyChat</a>
              </p>
            </li>
            <li>
              <h3 className="font-semibold mb-2">Voice Technology</h3>
              <p className="text-gray-700 mb-2">
                <a href="https://www.voiceflow.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Voiceflow</a>,{' '}
                <a href="https://otter.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">otter.ai</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}