import React, { Suspense, useEffect } from 'react';
import { Wrench, Users, AppWindow, UserRound, Headphones, Github, Pencil, Image, Clock, GraduationCap, DollarSign, Heart, ShoppingCart, Plane, Gamepad2, Palette } from 'lucide-react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Search from './components/Search';
import WelcomePanel from './components/WelcomePanel';
import { Video as VideoIcon } from 'lucide-react';
import SEO from './components/SEO';
import { trackPageView } from './utils/analytics';

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
const TopToolsPage = React.lazy(() => import('./pages/TopTools'));
const Apps = React.lazy(() => import('./pages/Apps'));
const AIInMarketing = React.lazy(() => import('./pages/AIInMarketing'));
const Video = React.lazy(() => import('./pages/Video'));
const Audio = React.lazy(() => import('./pages/Audio'));
const GithubRepos = React.lazy(() => import('./pages/GithubRepos'));
const BoltGuide = React.lazy(() => import('./pages/BoltGuide'));
const DesignSystem = React.lazy(() => import('./pages/DesignSystem'));
const ContentCreation = React.lazy(() => import('./pages/ContentCreation'));
const ImageDesign = React.lazy(() => import('./pages/ImageDesign'));
const PersonalProductivity = React.lazy(() => import('./pages/PersonalProductivity'));
const Education = React.lazy(() => import('./pages/Education'));
const PersonalFinance = React.lazy(() => import('./pages/PersonalFinance'));
const HealthWellness = React.lazy(() => import('./pages/HealthWellness'));
const Ecommerce = React.lazy(() => import('./pages/Ecommerce'));
const TravelLifestyle = React.lazy(() => import('./pages/TravelLifestyle'));
const Gaming = React.lazy(() => import('./pages/Gaming'));
const GenerativeArt = React.lazy(() => import('./pages/GenerativeArt'));

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
    className={`rounded-2xl p-5 sm:p-7 transition-transform hover:scale-[1.02] cursor-pointer backdrop-blur-sm ${className} group`}
  >
    <div className="mb-4 sm:mb-5 text-gray-900">
      {icon}
    </div>
    <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{title}</h2>
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
      '/content-creation': () => import('./pages/ContentCreation'),
      '/image-design': () => import('./pages/ImageDesign'),
      '/personal-productivity': () => import('./pages/PersonalProductivity'),
      '/education': () => import('./pages/Education'),
      '/personal-finance': () => import('./pages/PersonalFinance'),
      '/health-wellness': () => import('./pages/HealthWellness'),
      '/ecommerce': () => import('./pages/Ecommerce'),
      '/travel-lifestyle': () => import('./pages/TravelLifestyle'),
      '/gaming': () => import('./pages/Gaming'),
      '/generative-art': () => import('./pages/GenerativeArt'),
    };

    if (importMap[path]) {
      importMap[path]();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0]">
      <SEO 
        title="Home"
        description="Your comprehensive guide to AI tools and resources. Explore categories like AI agents, top tools, apps, marketing, video, and audio."
        keywords="AI tools, artificial intelligence, AI guide, AI resources, AI categories"
        schemaType="WebPage"
      />
      {/* Header */}
      <header className="p-4 sm:p-6 flex justify-end">
        <Search />
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Welcome Panel */}
        <WelcomePanel />

        {/* Cards */}
        <div className="space-y-3 sm:space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
          {/* Top Tools - Full width on mobile */}
          <CategoryCard
            title="Top Tools"
            description="Best no-code tools"
            icon={<Wrench className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-blue-200 to-purple-200 md:col-span-3"
            onClick={() => navigate('/top-tools')}
            onMouseEnter={() => prefetchPage('/top-tools')}
          />

          {/* Two Column Layout on mobile - Agents, Apps, Travel & Lifestyle on desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:contents">
            <CategoryCard
              title="Agents"
              description="Agents in action"
              icon={<Users className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-green-200 to-emerald-200"
              onClick={() => navigate('/agents')}
              onMouseEnter={() => prefetchPage('/agents')}
            />
            <CategoryCard
              title="Apps"
              description="Must try apps"
              icon={<AppWindow className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-pink-200 to-rose-200"
              onClick={() => navigate('/apps')}
              onMouseEnter={() => prefetchPage('/apps')}
            />
          </div>
          
          {/* Travel & Lifestyle on desktop (moved up) */}
          <CategoryCard
            title="Travel & Lifestyle"
            description="AI for travel planning and experiences"
            icon={<Plane className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-blue-200 to-sky-200 hidden md:block"
            onClick={() => navigate('/travel-lifestyle')}
            onMouseEnter={() => prefetchPage('/travel-lifestyle')}
          />

          {/* AI in Marketing - Full width on mobile */}
          <CategoryCard
            title="AI in Marketing"
            description="How can marketers use AI"
            icon={<UserRound className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 md:col-span-3"
            onClick={() => navigate('/ai-in-marketing')}
            onMouseEnter={() => prefetchPage('/ai-in-marketing')}
          />

          {/* Two Column Layout on mobile - Video, Audio, Gaming on desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:contents">
            <CategoryCard
              title="Video"
              description="Explore video tools"
              icon={<VideoIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-orange-200 to-red-200"
              onClick={() => navigate('/video')}
              onMouseEnter={() => prefetchPage('/video')}
            />
            <CategoryCard
              title="Audio"
              description="Try Audio tools"
              icon={<Headphones className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-teal-200 to-cyan-200"
              onClick={() => navigate('/audio')}
              onMouseEnter={() => prefetchPage('/audio')}
            />
          </div>
          
          {/* Gaming on desktop (moved up) */}
          <CategoryCard
            title="Gaming"
            description="AI in games and entertainment"
            icon={<Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-violet-200 to-indigo-200 hidden md:block"
            onClick={() => navigate('/gaming')}
            onMouseEnter={() => prefetchPage('/gaming')}
          />

          {/* Github Repos - Full width on mobile */}
          <CategoryCard
            title="Github Repos"
            description="Curated list of github repos"
            icon={<Github className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-gray-200 to-gray-400 md:col-span-3"
            onClick={() => navigate('/github-repos')}
            onMouseEnter={() => prefetchPage('/github-repos')}
          />

          {/* Content Creation - Full width on mobile */}
          <CategoryCard
            title="Content Creation"
            description="AI tools for writing and copywriting"
            icon={<Pencil className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-yellow-200 to-amber-200 md:col-span-3"
            onClick={() => navigate('/content-creation')}
            onMouseEnter={() => prefetchPage('/content-creation')}
          />

          {/* Two Column Layout on mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:contents">
            <CategoryCard
              title="Image & Design"
              description="AI image generation and design tools"
              icon={<Image className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-indigo-200 to-blue-200"
              onClick={() => navigate('/image-design')}
              onMouseEnter={() => prefetchPage('/image-design')}
            />
            <CategoryCard
              title="Productivity"
              description="Personal organization and efficiency"
              icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-lime-200 to-green-200"
              onClick={() => navigate('/personal-productivity')}
              onMouseEnter={() => prefetchPage('/personal-productivity')}
            />
          </div>

          {/* Two Column Layout on mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:contents">
            <CategoryCard
              title="Education"
              description="AI tools for learning and teaching"
              icon={<GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-sky-200 to-cyan-200"
              onClick={() => navigate('/education')}
              onMouseEnter={() => prefetchPage('/education')}
            />
            <CategoryCard
              title="Personal Finance"
              description="AI for budgeting and financial planning"
              icon={<DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-emerald-200 to-teal-200"
              onClick={() => navigate('/personal-finance')}
              onMouseEnter={() => prefetchPage('/personal-finance')}
            />
          </div>

          {/* Two Column Layout on mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:contents">
            <CategoryCard
              title="Health & Wellness"
              description="AI for fitness and mental wellbeing"
              icon={<Heart className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-red-200 to-pink-200"
              onClick={() => navigate('/health-wellness')}
              onMouseEnter={() => prefetchPage('/health-wellness')}
            />
            <CategoryCard
              title="E-commerce"
              description="AI tools for online shopping and retail"
              icon={<ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-fuchsia-200 to-purple-200"
              onClick={() => navigate('/ecommerce')}
              onMouseEnter={() => prefetchPage('/ecommerce')}
            />
          </div>

          {/* Travel & Lifestyle - Only visible on mobile (duplicated for desktop layout) */}
          <div className="md:hidden">
            <CategoryCard
              title="Travel & Lifestyle"
              description="AI for travel planning and experiences"
              icon={<Plane className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-blue-200 to-sky-200"
              onClick={() => navigate('/travel-lifestyle')}
              onMouseEnter={() => prefetchPage('/travel-lifestyle')}
            />
          </div>

          {/* Gaming - Only visible on mobile (duplicated for desktop layout) */}
          <div className="md:hidden">
            <CategoryCard
              title="Gaming"
              description="AI in games and entertainment"
              icon={<Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-violet-200 to-indigo-200"
              onClick={() => navigate('/gaming')}
              onMouseEnter={() => prefetchPage('/gaming')}
            />
          </div>

          {/* Generative Art - Full width on mobile */}
          <CategoryCard
            title="Generative Art"
            description="AI for creative expression and art"
            icon={<Palette className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-rose-200 to-purple-200 md:col-span-3"
            onClick={() => navigate('/generative-art')}
            onMouseEnter={() => prefetchPage('/generative-art')}
          />
        </div>
      </main>
    </div>
  );
}

// Analytics tracker component
const AnalyticsTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname);
  }, [location]);
  
  return null;
};

function App() {
  return (
    <BrowserRouter>
      {/* Track analytics for all route changes */}
      <AnalyticsTracker />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agents" element={withLoadingFallback(Agents)} />
        <Route path="/top-tools" element={withLoadingFallback(TopToolsPage)} />
        <Route path="/apps" element={withLoadingFallback(Apps)} />
        <Route path="/ai-in-marketing" element={withLoadingFallback(AIInMarketing)} />
        <Route path="/video" element={withLoadingFallback(Video)} />
        <Route path="/audio" element={withLoadingFallback(Audio)} />
        <Route path="/github-repos" element={withLoadingFallback(GithubRepos)} />
        <Route path="/bolt-guide" element={withLoadingFallback(BoltGuide)} />
        <Route path="/design-system" element={withLoadingFallback(DesignSystem)} />
        <Route path="/content-creation" element={withLoadingFallback(ContentCreation)} />
        <Route path="/image-design" element={withLoadingFallback(ImageDesign)} />
        <Route path="/personal-productivity" element={withLoadingFallback(PersonalProductivity)} />
        <Route path="/education" element={withLoadingFallback(Education)} />
        <Route path="/personal-finance" element={withLoadingFallback(PersonalFinance)} />
        <Route path="/health-wellness" element={withLoadingFallback(HealthWellness)} />
        <Route path="/ecommerce" element={withLoadingFallback(Ecommerce)} />
        <Route path="/travel-lifestyle" element={withLoadingFallback(TravelLifestyle)} />
        <Route path="/gaming" element={withLoadingFallback(Gaming)} />
        <Route path="/generative-art" element={withLoadingFallback(GenerativeArt)} />
        
        {/* Github Repos subcategories */}
        <Route path="/github-repos/llm" element={withLoadingFallback(LLMRepos)} />
        <Route path="/github-repos/agents" element={withLoadingFallback(AgentsRepos)} />
        <Route path="/github-repos/tools" element={withLoadingFallback(ToolsRepos)} />
        <Route path="/github-repos/applications" element={withLoadingFallback(ApplicationsRepos)} />
        
        {/* Tools subcategories */}
        <Route path="/top-tools/automation" element={withLoadingFallback(TopTools)} />
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