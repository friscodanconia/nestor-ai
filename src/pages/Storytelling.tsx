import { useNavigate } from 'react-router-dom';
import { AppWindow, ArrowLeft } from 'lucide-react';

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
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">Must-Try Applications</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-800 leading-snug sm:leading-relaxed">
          Explore our curated collection of must-try applications that leverage AI technology to enhance productivity and creativity.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="/storytelling/productivity"
              className="flex items-center gap-2 hover:text-rose-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-rose-800 transition-colors"></div>
              Productivity apps
            </a>
          </li>
          <li>
            <a 
              href="/storytelling/creative"
              className="flex items-center gap-2 hover:text-rose-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-rose-800 transition-colors"></div>
              Creative tools
            </a>
          </li>
          <li>
            <a 
              href="/storytelling/collaboration"
              className="flex items-center gap-2 hover:text-rose-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-rose-800 transition-colors"></div>
              Collaboration platforms
            </a>
          </li>
          <li>
            <a 
              href="/storytelling/ai-powered"
              className="flex items-center gap-2 hover:text-rose-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-rose-800 transition-colors"></div>
              AI-powered applications
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}