import React, { Suspense, useEffect } from 'react';
import { Wrench, Users, AppWindow, UserRound, Headphones, Github, Pencil, Image, Clock, GraduationCap, DollarSign, Heart, ShoppingCart, Plane, Gamepad2, Palette, Code, HelpCircle, FileText } from 'lucide-react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Search from './components/Search';
import WelcomePanel from './components/WelcomePanel';
import { Video as VideoIcon } from 'lucide-react';
import SEO from './components/SEO';
import { trackPageView } from './utils/analytics';

// Force rebuild - 2025-03-24

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
const MCP = React.lazy(() => import('./pages/MCP'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Blog = React.lazy(() => import('./pages/Blog'));

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
      '/mcp': () => import('./pages/MCP'),
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
      
      {/* Header Section with improved spacing */}
      <div className="pt-8 pb-4 sm:pt-10 sm:pb-6 px-4 max-w-5xl mx-auto">
        {/* Search Bar */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-full max-w-md">
            <Search />
          </div>
        </div>
        
        {/* Nestor Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-600 mb-8 sm:mb-10">
          Nestor
        </h1>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-3 sm:px-4 pb-8">
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

          {/* Two Column Layout on mobile - Agents, Apps on desktop */}
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
          
          {/* Generative Art - Full width on third column */}
          <CategoryCard
            title="Generative Art"
            description="AI for creative expression and art"
            icon={<Palette className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-rose-200 to-purple-200"
            onClick={() => navigate('/generative-art')}
            onMouseEnter={() => prefetchPage('/generative-art')}
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

          {/* Two Column Layout on mobile - Video, Audio on desktop */}
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
          
          {/* Productivity on desktop */}
          <CategoryCard
            title="Productivity"
            description="Personal organization and efficiency"
            icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8" />}
            className="bg-gradient-to-br from-lime-200 to-green-200"
            onClick={() => navigate('/personal-productivity')}
            onMouseEnter={() => prefetchPage('/personal-productivity')}
          />

          {/* NEW LAYOUT: Content Creation (65%) and Github Repos (35%) in a single row - Desktop only */}
          <div className="hidden md:flex md:col-span-3 md:flex-row md:gap-5">
            <div className="md:w-[65%]">
              <CategoryCard
                title="Content Creation"
                description="AI tools for writing and copywriting"
                icon={<Pencil className="w-6 h-6 sm:w-8 sm:h-8" />}
                className="bg-gradient-to-br from-yellow-200 to-amber-200 h-full"
                onClick={() => navigate('/content-creation')}
                onMouseEnter={() => prefetchPage('/content-creation')}
              />
            </div>
            <div className="md:w-[35%]">
              <CategoryCard
                title="Github Repos"
                description="Curated list of github repos"
                icon={<Github className="w-6 h-6 sm:w-8 sm:h-8" />}
                className="bg-gradient-to-br from-gray-200 to-gray-400 h-full"
                onClick={() => navigate('/github-repos')}
                onMouseEnter={() => prefetchPage('/github-repos')}
              />
            </div>
          </div>

          {/* Mobile only: Content Creation */}
          <div className="block md:hidden">
            <CategoryCard
              title="Content Creation"
              description="AI tools for writing and copywriting"
              icon={<Pencil className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-yellow-200 to-amber-200"
              onClick={() => navigate('/content-creation')}
              onMouseEnter={() => prefetchPage('/content-creation')}
            />
          </div>

          {/* Two Column Layout on mobile - Image & Design, Education */}
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
              title="Education"
              description="AI tools for learning and teaching"
              icon={<GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-sky-200 to-cyan-200"
              onClick={() => navigate('/education')}
              onMouseEnter={() => prefetchPage('/education')}
            />
          </div>

          {/* Mobile only: Github Repos */}
          <div className="block md:hidden">
            <CategoryCard
              title="Github Repos"
              description="Curated list of github repos"
              icon={<Github className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-gray-200 to-gray-400"
              onClick={() => navigate('/github-repos')}
              onMouseEnter={() => prefetchPage('/github-repos')}
            />
          </div>

          {/* Personal Finance and MCP - Desktop: Personal Finance full column, MCP in empty space 
              Mobile: Personal Finance and MCP side by side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:contents">
            <CategoryCard
              title="Personal Finance"
              description="AI for budgeting and financial planning"
              icon={<DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-emerald-200 to-teal-200"
              onClick={() => navigate('/personal-finance')}
              onMouseEnter={() => prefetchPage('/personal-finance')}
            />
            <CategoryCard
              title="MCP"
              description="What is Model Context Protocol"
              icon={<Code className="w-6 h-6 sm:w-8 sm:h-8" />}
              className="bg-gradient-to-br from-purple-200 to-indigo-200"
              onClick={() => navigate('/mcp')}
              onMouseEnter={() => prefetchPage('/mcp')}
            />
          </div>

          {/* Two Column Layout on mobile - Health & Wellness, E-commerce on desktop */}
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

          {/* NEW LAYOUT: Gaming (65%) and Travel & Lifestyle (35%) in a single row */}
          <div className="md:col-span-3 flex flex-col md:flex-row md:gap-5 space-y-3 md:space-y-0">
            <div className="md:w-[35%]">
              <CategoryCard
                title="Travel & Lifestyle"
                description="AI for travel planning"
                icon={<Plane className="w-6 h-6 sm:w-8 sm:h-8" />}
                className="bg-gradient-to-br from-blue-200 to-sky-200 h-full"
                onClick={() => navigate('/travel-lifestyle')}
                onMouseEnter={() => prefetchPage('/travel-lifestyle')}
              />
            </div>
            <div className="md:w-[65%]">
              <CategoryCard
                title="Gaming"
                description="AI in games and entertainment"
                icon={<Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8" />}
                className="bg-gradient-to-br from-violet-200 to-indigo-200 h-full"
                onClick={() => navigate('/gaming')}
                onMouseEnter={() => prefetchPage('/gaming')}
              />
            </div>
          </div>
          
          {/* NEW LAYOUT: FAQ (50%) and Blog (50%) in a single row */}
          <div className="md:col-span-3 flex flex-row gap-3 md:gap-5">
            <div className="w-[50%]">
              <CategoryCard
                title="FAQs"
                description="Frequently asked questions about AI tools"
                icon={<HelpCircle className="w-6 h-6 sm:w-8 sm:h-8" />}
                className="bg-gradient-to-br from-amber-200 to-yellow-200 h-full"
                onClick={() => navigate('/faq')}
                onMouseEnter={() => prefetchPage('/faq')}
              />
            </div>
            <div className="w-[50%]">
              <CategoryCard
                title="Blog"
                description="Latest insights and tutorials on AI technology"
                icon={<FileText className="w-6 h-6 sm:w-8 sm:h-8" />}
                className="bg-gradient-to-br from-lime-200 to-green-200 h-full"
                onClick={() => navigate('/blog')}
                onMouseEnter={() => prefetchPage('/blog')}
              />
            </div>
          </div>
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
      <Suspense fallback={<PageLoader />}>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/top-tools" element={<TopToolsPage />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/ai-in-marketing" element={<AIInMarketing />} />
          <Route path="/video" element={<Video />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/github-repos" element={<GithubRepos />} />
          <Route path="/bolt-guide" element={<BoltGuide />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/content-creation" element={<ContentCreation />} />
          <Route path="/image-design" element={<ImageDesign />} />
          <Route path="/personal-productivity" element={<PersonalProductivity />} />
          <Route path="/education" element={<Education />} />
          <Route path="/personal-finance" element={<PersonalFinance />} />
          <Route path="/health-wellness" element={<HealthWellness />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/travel-lifestyle" element={<TravelLifestyle />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/generative-art" element={<GenerativeArt />} />
          <Route path="/mcp" element={<MCP />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          {/* Github Repos subcategories */}
          <Route path="/github-repos/llm" element={<LLMRepos />} />
          <Route path="/github-repos/agents" element={<AgentsRepos />} />
          <Route path="/github-repos/tools" element={<ToolsRepos />} />
          <Route path="/github-repos/applications" element={<ApplicationsRepos />} />
          {/* Tools subcategories */}
          <Route path="/top-tools/automation" element={<TopTools />} />
          <Route path="/top-tools/website-builders" element={<WebsiteBuilders />} />
          <Route path="/top-tools/integrations" element={<IntegrationPlatforms />} />
          <Route path="/top-tools/visual-development" element={<VisualDevelopment />} />
          <Route path="/top-tools/website-app-builders" element={<WebsiteAppBuilders />} />
          <Route path="/top-tools/ai-builders" element={<AIBuilders />} />
          <Route path="/top-tools/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/top-tools/chatbot-interfaces" element={<ChatbotInterfaces />} />
          <Route path="/top-tools/voice-technology" element={<VoiceTechnology />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;