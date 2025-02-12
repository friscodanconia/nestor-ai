import React from 'react';
import { Headphones, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EmotionalReflection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 to-cyan-200">
      <header className="p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Headphones className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Audio</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Audio Tools</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Experience the power of audio tools and technologies that transform the way you create, edit, and interact with sound.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="/emotional-reflection/editing"
              className="flex items-center gap-2 hover:text-teal-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-teal-800 transition-colors"></div>
              Audio editing tools
            </a>
          </li>
          <li>
            <a 
              href="/emotional-reflection/generation"
              className="flex items-center gap-2 hover:text-teal-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-teal-800 transition-colors"></div>
              AI audio generation
            </a>
          </li>
          <li>
            <a 
              href="/emotional-reflection/processing"
              className="flex items-center gap-2 hover:text-teal-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-teal-800 transition-colors"></div>
              Sound processing
            </a>
          </li>
          <li>
            <a 
              href="/emotional-reflection/transcription"
              className="flex items-center gap-2 hover:text-teal-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-teal-800 transition-colors"></div>
              Audio transcription
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}