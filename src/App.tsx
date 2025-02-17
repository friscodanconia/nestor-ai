import React, { Suspense } from 'react';
import { Wrench, Users, AppWindow, UserRound, Video, Headphones, Github } from 'lucide-react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Search from './components/Search';
import WelcomePanel from './components/WelcomePanel';

// Lazy load all pages with loading fallback
const withLoadingFallback = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FDF6F0]">
    <div className="space-y-3 text-center">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Lazy load pages with prefetch
const LifeAdvice = React.lazy(() => import('./pages/LifeAdvice'));
const QuickAnswers = React.lazy(() => import('./pages/QuickAnswers'));
const Storytelling = React.lazy(() => import('./pages/Storytelling'));
const DeeperQuestions = React.lazy(() => import('./pages/DeeperQuestions'));
const Spirituality = React.lazy(() => import('./pages/Spirituality'));
const EmotionalReflection = React.lazy(() => import('./pages/EmotionalReflection'));
const GithubRepos = React.lazy(() => import('./pages/GithubRepos'));
const BoltGuide = React.lazy(() => import('./pages/BoltGuide'));

// Lazy load Github subcategories
const LLMRepos = React.lazy(() => import('./pages/github/LLMRepos'));
const AgentsRepos = React.lazy(() => import('./pages/github/AgentsRepos'));
const ToolsRepos = React.lazy(() => import('./pages/github/ToolsRepos'));
const ApplicationsRepos = React.lazy(() => import('./pages/github/ApplicationsRepos'));

// Lazy load Tools subcategories
const TopTools = React.lazy(() => import('./pages/tools/TopTools'));
const WebsiteBuilders = React.lazy(() => import('./pages/tools/WebsiteBuilders'));
const IntegrationPlatforms = React.lazy(() => import('./pages/tools/IntegrationPlatforms'));
const VisualDevelopment = React.lazy(() => import('./pages/tools/VisualDevelopment'));
const WebsiteAppBuilders = React.lazy(() => import('./pages/tools/WebsiteAppBuilders'));
const AIBuilders = React.lazy(() => import('./pages/tools/AIBuilders'));
const WorkflowAutomation = React.lazy(() => import('./pages/tools/WorkflowAutomation'));
const ChatbotInterfaces = React.lazy(() => import('./pages/tools/ChatbotInterfaces'));
const VoiceTechnology = React.lazy(() => import('./pages/tools/VoiceTechnology'));

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon, className, onClick, onMouseEnter }) => (
  <div 
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    className={`rounded-2xl p-4 sm:p-6 transition-transform hover:scale-[1.02] cursor-pointer backdrop-blur-sm ${className} group`}
  >
    <div className="mb-3 sm:mb-4 text-gray-900">
      {icon}
    </div>
    <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900">{title}</h2>
    <p className="text-sm sm:text-base text-gray-800 line-clamp-2">{description}</p>
  </div>
);

function HomePage() {
  const navigate = useNavigate();

  // Prefetch main pages on hover
  const prefetchPage = (path: string) => {
    const importMap: Record<string, () => Promise<any>> = {
      '/life-advice': () => import('./pages/LifeAdvice'),
      '/quick-answers': () => import('./pages/QuickAnswers'),
      '/storytelling': () => import('./pages/Storytelling'),
      '/deeper-questions': () => import('./pages/DeeperQuestions'),
      '/spirituality': () => import('./pages/Spirituality'),
      '/emotional-reflection': () => import('./pages/EmotionalReflection'),
      '/github-repos': () => import('./pages/GithubRepos'),
    };

    if (importMap[path]) {
      importMap[path]();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0]">
      {/* Header */}
      <header className="p-4 sm:p-6 flex justify-end">
        <Search />
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Welcome Panel */}
        <WelcomePanel />

        {/* Cards */}
        <div className="space-y-3 sm:space-y-4">
          {/* Top Tools */}
          <CategoryCard
            title="Top Tools"
            description="Best no-code tools"
            icon={<Wrench className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-blue-200 to-purple-200"
            onClick={() => navigate('/quick-answers')}
            onMouseEnter={() => prefetchPage('/quick-answers')}
          />

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <CategoryCard
              title="Agents"
              description="Agents in action"
              icon={<Users className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-green-200 to-emerald-200"
              onClick={() => navigate('/life-advice')}
              onMouseEnter={() => prefetchPage('/life-advice')}
            />
            <CategoryCard
              title="Apps"
              description="Must try apps"
              icon={<AppWindow className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-pink-200 to-rose-200"
              onClick={() => navigate('/storytelling')}
              onMouseEnter={() => prefetchPage('/storytelling')}
            />
          </div>

          {/* Non Technical Perspective */}
          <CategoryCard
            title="Non Technical Perspective"
            description="Explore AI experiments from a non-technical user point of view"
            icon={<UserRound className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200"
            onClick={() => navigate('/deeper-questions')}
            onMouseEnter={() => prefetchPage('/deeper-questions')}
          />

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <CategoryCard
              title="Video"
              description="Explore video tools"
              icon={<Video className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-orange-200 to-red-200"
              onClick={() => navigate('/spirituality')}
              onMouseEnter={() => prefetchPage('/spirituality')}
            />
            <CategoryCard
              title="Audio"
              description="Try Audio tools"
              icon={<Headphones className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-teal-200 to-cyan-200"
              onClick={() => navigate('/emotional-reflection')}
              onMouseEnter={() => prefetchPage('/emotional-reflection')}
            />
          </div>

          {/* Github Repos */}
          <CategoryCard
            title="Github Repos"
            description="Cool git repos you can check out"
            icon={<Github className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-violet-200 to-purple-200"
            onClick={() => navigate('/github-repos')}
            onMouseEnter={() => prefetchPage('/github-repos')}
          />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/life-advice" element={withLoadingFallback(LifeAdvice)} />
        <Route path="/quick-answers" element={withLoadingFallback(QuickAnswers)} />
        <Route path="/storytelling" element={withLoadingFallback(Storytelling)} />
        <Route path="/deeper-questions" element={withLoadingFallback(DeeperQuestions)} />
        <Route path="/spirituality" element={withLoadingFallback(Spirituality)} />
        <Route path="/emotional-reflection" element={withLoadingFallback(EmotionalReflection)} />
        <Route path="/github-repos" element={withLoadingFallback(GithubRepos)} />
        <Route path="/bolt-guide" element={withLoadingFallback(BoltGuide)} />
        
        {/* Github Repos subcategories */}
        <Route path="/github-repos/llm" element={withLoadingFallback(LLMRepos)} />
        <Route path="/github-repos/agents" element={withLoadingFallback(AgentsRepos)} />
        <Route path="/github-repos/tools" element={withLoadingFallback(ToolsRepos)} />
        <Route path="/github-repos/applications" element={withLoadingFallback(ApplicationsRepos)} />
        
        {/* Tools subcategories */}
        <Route path="/quick-answers/automation" element={withLoadingFallback(TopTools)} />
        <Route path="/quick-answers/website-builders" element={withLoadingFallback(WebsiteBuilders)} />
        <Route path="/quick-answers/integrations" element={withLoadingFallback(IntegrationPlatforms)} />
        <Route path="/quick-answers/visual-development" element={withLoadingFallback(VisualDevelopment)} />
        <Route path="/quick-answers/website-app-builders" element={withLoadingFallback(WebsiteAppBuilders)} />
        <Route path="/quick-answers/ai-builders" element={withLoadingFallback(AIBuilders)} />
        <Route path="/quick-answers/workflow-automation" element={withLoadingFallback(WorkflowAutomation)} />
        <Route path="/quick-answers/chatbot-interfaces" element={withLoadingFallback(ChatbotInterfaces)} />
        <Route path="/quick-answers/voice-technology" element={withLoadingFallback(VoiceTechnology)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;