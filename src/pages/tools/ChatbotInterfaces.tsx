import React from 'react';
import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function ChatbotInterfaces() {
  return (
    <SubPageLayout
      title="Chatbot and Conversational Interfaces"
      description="Chatbots and conversational interfaces provide interactive, automated communication with users. These tools enable businesses to create engaging conversational experiences without complex programming."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">The Power of Conversational AI</h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            Chatbots and conversational interfaces transform how businesses interact with their customers, providing 24/7 support, lead generation, and automated assistance through natural language conversations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Capabilities</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="text-base sm:text-lg leading-relaxed">Natural language processing</li>
            <li className="text-base sm:text-lg leading-relaxed">Multi-channel deployment</li>
            <li className="text-base sm:text-lg leading-relaxed">Custom conversation flows</li>
            <li className="text-base sm:text-lg leading-relaxed">Integration with business systems</li>
            <li className="text-base sm:text-lg leading-relaxed">Analytics and insights</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Leading Platforms</h3>
          <div className="space-y-3">
            <div>
              <a href="https://landbot.io" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Landbot</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Create conversational experiences with a no-code builder.</p>
            </div>
            <div>
              <a href="https://manychat.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">ManyChat</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Build automated messaging and marketing chatbots.</p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}