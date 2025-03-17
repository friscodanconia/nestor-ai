import React, { Suspense } from 'react';
import { Wrench, Users, AppWindow, UserRound, Video as VideoIcon, Headphones, Github, Sparkles } from 'lucide-react';
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
const Agents = React.lazy(() => import('./pages/Agents'));
const TopTools = React.lazy(() => import('./pages/TopTools'));
const Apps = React.lazy(() => import('./pages/Apps'));
const AIInMarketing = React.lazy(() => import('./pages/AIInMarketing'));
const Video = React.lazy(() => import('./pages/Video'));
const Audio = React.lazy(() => import('./pages/Audio'));
const GithubRepos = React.lazy(() => import('./pages/GithubRepos'));
const BoltGuide = React.lazy(() => import('./pages/BoltGuide'));

// Lazy load Github subcategories
const LLMRepos = React.lazy(() => import('./pages/github/LLMRepos'));
const AgentsRepos = React.lazy(() => import('./pages/github/AgentsRepos'));
const ToolsRepos = React.lazy(() => import('./pages/github/ToolsRepos'));
const ApplicationsRepos = React.lazy(() => import('./pages/github/ApplicationsRepos'));

// Lazy load Tools subcategories
const TopToolsCategory = React.lazy(() => import('./pages/tools/TopTools'));
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
      '/agents': () => import('./pages/Agents'),
      '/top-tools': () => import('./pages/TopTools'),
      '/apps': () => import('./pages/Apps'),
      '/ai-in-marketing': () => import('./pages/AIInMarketing'),
      '/video': () => import('./pages/Video'),
      '/audio': () => import('./pages/Audio'),
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
            onClick={() => navigate('/top-tools')}
            onMouseEnter={() => prefetchPage('/top-tools')}
          />

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <CategoryCard
              title="Agents"
              description="AI assistants that can help you with tasks"
              icon={<Users className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-green-200 to-emerald-200"
              onClick={() => navigate('/agents')}
              onMouseEnter={() => prefetchPage('/agents')}
            />
            <CategoryCard
              title="Apps"
              description="AI-powered applications"
              icon={<Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-pink-200 to-rose-200"
              onClick={() => navigate('/apps')}
              onMouseEnter={() => prefetchPage('/apps')}
            />
          </div>

          {/* Non Technical Perspective */}
          <CategoryCard
            title="AI in Marketing"
            description="Marketing strategies with AI"
            icon={<UserRound className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200"
            onClick={() => navigate('/ai-in-marketing')}
            onMouseEnter={() => prefetchPage('/ai-in-marketing')}
          />

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <CategoryCard
              title="Video"
              description="AI-powered video tools"
              icon={<VideoIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-orange-200 to-red-200"
              onClick={() => navigate('/video')}
              onMouseEnter={() => prefetchPage('/video')}
            />
            <CategoryCard
              title="Audio"
              description="AI-powered audio tools"
              icon={<Headphones className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-teal-200 to-cyan-200"
              onClick={() => navigate('/audio')}
              onMouseEnter={() => prefetchPage('/audio')}
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
        <Route path="/agents" element={withLoadingFallback(Agents)} />
        <Route path="/top-tools" element={withLoadingFallback(TopTools)} />
        <Route path="/apps" element={withLoadingFallback(Apps)} />
        <Route path="/ai-in-marketing" element={withLoadingFallback(AIInMarketing)} />
        <Route path="/video" element={withLoadingFallback(Video)} />
        <Route path="/audio" element={withLoadingFallback(Audio)} />
        <Route path="/github-repos" element={withLoadingFallback(GithubRepos)} />
        <Route path="/bolt-guide" element={withLoadingFallback(BoltGuide)} />
        
        {/* Github Repos subcategories */}
        <Route path="/github-repos/llm" element={withLoadingFallback(LLMRepos)} />
        <Route path="/github-repos/agents" element={withLoadingFallback(AgentsRepos)} />
        <Route path="/github-repos/tools" element={withLoadingFallback(ToolsRepos)} />
        <Route path="/github-repos/applications" element={withLoadingFallback(ApplicationsRepos)} />
        
        {/* Tools subcategories */}
        <Route path="/top-tools/automation" element={withLoadingFallback(TopToolsCategory)} />
        <Route path="/top-tools/website-builders" element={withLoadingFallback(WebsiteBuilders)} />
        <Route path="/top-tools/integrations" element={withLoadingFallback(IntegrationPlatforms)} />
        <Route path="/top-tools/visual-development" element={withLoadingFallback(VisualDevelopment)} />
        <Route path="/top-tools/website-app-builders" element={withLoadingFallback(WebsiteAppBuilders)} />
        <Route path="/top-tools/ai-builders" element={withLoadingFallback(AIBuilders)} />
        <Route path="/top-tools/workflow-automation" element={withLoadingFallback(WorkflowAutomation)} />
        <Route path="/top-tools/chatbot-interfaces" element={withLoadingFallback(ChatbotInterfaces)} />
        <Route path="/top-tools/voice-technology" element={withLoadingFallback(VoiceTechnology)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;