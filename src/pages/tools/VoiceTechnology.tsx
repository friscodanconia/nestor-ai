import React from 'react';
import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function VoiceTechnology() {
  return (
    <SubPageLayout
      title="Voice Technology"
      description="Voice technology tools enable the creation of voice-based applications and services, making content and interactions more accessible through speech recognition and synthesis."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Voice Technology Revolution</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Voice technology is transforming how we interact with devices and content. These tools make it possible to create voice-enabled applications, transcribe content, and develop voice-based interfaces without deep technical expertise.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Speech recognition and transcription</li>
            <li>Voice synthesis and text-to-speech</li>
            <li>Voice app development</li>
            <li>Multi-language support</li>
            <li>Voice analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Popular Platforms</h3>
          <div className="space-y-4">
            <div>
              <a href="https://www.voiceflow.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Voiceflow</a>
              <p className="text-gray-700">Design, prototype and build voice apps without coding.</p>
            </div>
            <div>
              <a href="https://otter.ai" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">otter.ai</a>
              <p className="text-gray-700">AI-powered transcription and note-taking service.</p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}