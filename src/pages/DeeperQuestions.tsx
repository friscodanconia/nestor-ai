import { UserRound, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Non Technical Perspective</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">AI for Everyone</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-800 leading-snug sm:leading-relaxed">
          Explore AI experiments and innovations from a non-technical user's perspective, making advanced technology accessible and understandable for everyone.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li>
            <a 
              href="/deeper-questions/everyday-use"
              className="flex items-center gap-2 hover:text-orange-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-orange-800 transition-colors"></div>
              Everyday AI applications
            </a>
          </li>
          <li>
            <a 
              href="/deeper-questions/user-experience"
              className="flex items-center gap-2 hover:text-orange-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-orange-800 transition-colors"></div>
              User experience stories
            </a>
          </li>
          <li>
            <a 
              href="/deeper-questions/practical-guides"
              className="flex items-center gap-2 hover:text-orange-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-orange-800 transition-colors"></div>
              Practical AI guides
            </a>
          </li>
          <li>
            <a 
              href="/deeper-questions/impact"
              className="flex items-center gap-2 hover:text-orange-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-orange-800 transition-colors"></div>
              Impact on daily life
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}