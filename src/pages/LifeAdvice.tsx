import { useNavigate } from 'react-router-dom';
import { Users, ArrowLeft } from 'lucide-react';

export default function LifeAdvice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-emerald-200">
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Agents</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">Understanding AI Agents</h2>
        <div className="space-y-2 mb-4">
          <p className="text-base sm:text-lg text-gray-800">
            Everyone is talking about agents, but what are they? Think of an agent as a software program that works independently to accomplish tasks, making decisions and taking action on behalf of the user.
          </p>
          <p className="text-base sm:text-lg text-gray-800">
            It acts as your digital assistant, understanding context, learning from interactions, and performing actions to achieve a goal. While plenty of applications use AI, not all qualify as "agents." What truly sets agents apart is their autonomy—the ability to work across multiple tools and steps to meet your objectives.
          </p>
        </div>
        <ul className="space-y-2 text-gray-800">
          <li>
            <a 
              href="/life-advice/business"
              className="flex items-center gap-2 hover:text-emerald-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-emerald-800 transition-colors"></div>
              Business automation agents
            </a>
          </li>
          <li>
            <a 
              href="/life-advice/personal"
              className="flex items-center gap-2 hover:text-emerald-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-emerald-800 transition-colors"></div>
              Personal assistant agents
            </a>
          </li>
          <li>
            <a 
              href="/life-advice/creative"
              className="flex items-center gap-2 hover:text-emerald-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-emerald-800 transition-colors"></div>
              Creative agents
            </a>
          </li>
          <li>
            <a 
              href="/life-advice/research"
              className="flex items-center gap-2 hover:text-emerald-800 transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-emerald-800 transition-colors"></div>
              Research and analysis agents
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}