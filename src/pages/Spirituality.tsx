import { useNavigate } from 'react-router-dom';
import { Video, ArrowLeft } from 'lucide-react';

export default function Spirituality() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-red-200">
      <header className="p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Video className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Video</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Video Tools</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Discover powerful video tools and technologies that help you create, edit, and enhance your video content.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="/spirituality/editing"
              className="flex items-center gap-2 hover:text-red-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-red-800 transition-colors"></div>
              Video editing tools
            </a>
          </li>
          <li>
            <a 
              href="/spirituality/generation"
              className="flex items-center gap-2 hover:text-red-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-red-800 transition-colors"></div>
              AI video generation
            </a>
          </li>
          <li>
            <a 
              href="/spirituality/enhancement"
              className="flex items-center gap-2 hover:text-red-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-red-800 transition-colors"></div>
              Video enhancement
            </a>
          </li>
          <li>
            <a 
              href="/spirituality/streaming"
              className="flex items-center gap-2 hover:text-red-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-red-800 transition-colors"></div>
              Streaming solutions
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}