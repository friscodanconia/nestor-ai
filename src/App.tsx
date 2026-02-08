import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Search from './components/Search';
import SEO from './components/SEO';

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

// Featured category card (larger, used for top 4)
interface FeaturedCardProps {
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  path: string;
}

const FeaturedCard: React.FC<FeaturedCardProps & { onClick: () => void; onMouseEnter: () => void }> = ({
  title, description, gradient, borderColor, onClick, onMouseEnter
}) => (
  <div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    className={`group relative overflow-hidden rounded-2xl p-4 md:p-6 transition-all hover:scale-[1.03] ${gradient} border-l-4 ${borderColor} shadow-sm min-h-0 md:min-h-[180px] flex flex-col md:justify-end cursor-pointer`}
  >
    <div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-xs text-gray-700 mt-1 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Compact category tile (used for all other categories)
interface CategoryTileProps {
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  path: string;
}

const CategoryTile: React.FC<CategoryTileProps & { onClick: () => void; onMouseEnter: () => void }> = ({
  title, description, gradient, borderColor, onClick, onMouseEnter
}) => (
  <div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    className={`group relative flex flex-col p-3 md:p-4 pr-3 ${gradient} border-l-4 ${borderColor} rounded-xl transition-all hover:scale-[1.02] shadow-sm cursor-pointer`}
  >
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <p className="text-xs leading-tight text-gray-700 mt-0.5">{description}</p>
  </div>
);

function HomePage() {
  const navigate = useNavigate();

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

      {/* Header */}
      <header className="pt-8 pb-4 sm:pt-10 sm:pb-8 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-600">Nestor</h1>
          <div className="w-full max-w-md">
            <Search />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">

        {/* Featured Categories */}
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FeaturedCard
              title="Top Tools"
              description="Best no-code tools for builders and creators"
              gradient="bg-gradient-to-br from-blue-200 to-purple-200"
              borderColor="border-blue-400"
              path="/top-tools"
              onClick={() => navigate('/top-tools')}
              onMouseEnter={() => prefetchPage('/top-tools')}
            />
            <FeaturedCard
              title="Agents"
              description="Intelligent AI agents built for action"
              gradient="bg-gradient-to-br from-green-200 to-emerald-200"
              borderColor="border-green-400"
              path="/agents"
              onClick={() => navigate('/agents')}
              onMouseEnter={() => prefetchPage('/agents')}
            />
            <FeaturedCard
              title="Video"
              description="Generate and edit cinematic video with AI"
              gradient="bg-gradient-to-br from-orange-200 to-red-200"
              borderColor="border-orange-400"
              path="/video"
              onClick={() => navigate('/video')}
              onMouseEnter={() => prefetchPage('/video')}
            />
            <FeaturedCard
              title="Apps"
              description="Essential AI applications for your device"
              gradient="bg-gradient-to-br from-pink-200 to-rose-200"
              borderColor="border-pink-400"
              path="/apps"
              onClick={() => navigate('/apps')}
              onMouseEnter={() => prefetchPage('/apps')}
            />
          </div>
        </section>

        {/* All Categories */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">All Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <CategoryTile
              title="Generative Art"
              description="Creative expression & AI art"
              gradient="bg-gradient-to-br from-rose-200 to-purple-200"
              borderColor="border-rose-400"
              path="/generative-art"
              onClick={() => navigate('/generative-art')}
              onMouseEnter={() => prefetchPage('/generative-art')}
            />
            <CategoryTile
              title="Marketing"
              description="AI for marketing stacks"
              gradient="bg-gradient-to-br from-pink-200 via-rose-200 to-orange-200"
              borderColor="border-pink-400"
              path="/ai-in-marketing"
              onClick={() => navigate('/ai-in-marketing')}
              onMouseEnter={() => prefetchPage('/ai-in-marketing')}
            />
            <CategoryTile
              title="Audio"
              description="Sound & music generation"
              gradient="bg-gradient-to-br from-teal-200 to-cyan-200"
              borderColor="border-teal-400"
              path="/audio"
              onClick={() => navigate('/audio')}
              onMouseEnter={() => prefetchPage('/audio')}
            />
            <CategoryTile
              title="Productivity"
              description="Organization & efficiency"
              gradient="bg-gradient-to-br from-lime-200 to-green-200"
              borderColor="border-lime-400"
              path="/personal-productivity"
              onClick={() => navigate('/personal-productivity')}
              onMouseEnter={() => prefetchPage('/personal-productivity')}
            />
            <CategoryTile
              title="Content"
              description="Writing & copywriting tools"
              gradient="bg-gradient-to-br from-yellow-200 to-amber-200"
              borderColor="border-yellow-400"
              path="/content-creation"
              onClick={() => navigate('/content-creation')}
              onMouseEnter={() => prefetchPage('/content-creation')}
            />
            <CategoryTile
              title="Github Repos"
              description="Curated open-source lists"
              gradient="bg-gradient-to-br from-gray-200 to-gray-400"
              borderColor="border-gray-400"
              path="/github-repos"
              onClick={() => navigate('/github-repos')}
              onMouseEnter={() => prefetchPage('/github-repos')}
            />
            <CategoryTile
              title="Design"
              description="Visual design & AI editing"
              gradient="bg-gradient-to-br from-indigo-200 to-blue-200"
              borderColor="border-indigo-400"
              path="/image-design"
              onClick={() => navigate('/image-design')}
              onMouseEnter={() => prefetchPage('/image-design')}
            />
            <CategoryTile
              title="Education"
              description="AI for learning & teachers"
              gradient="bg-gradient-to-br from-sky-200 to-cyan-200"
              borderColor="border-sky-400"
              path="/education"
              onClick={() => navigate('/education')}
              onMouseEnter={() => prefetchPage('/education')}
            />
            <CategoryTile
              title="Finance"
              description="Budgeting & AI planning"
              gradient="bg-gradient-to-br from-emerald-200 to-teal-200"
              borderColor="border-emerald-400"
              path="/personal-finance"
              onClick={() => navigate('/personal-finance')}
              onMouseEnter={() => prefetchPage('/personal-finance')}
            />
            <CategoryTile
              title="MCP"
              description="Model Context Protocol guide"
              gradient="bg-gradient-to-br from-purple-200 to-indigo-200"
              borderColor="border-purple-400"
              path="/mcp"
              onClick={() => navigate('/mcp')}
              onMouseEnter={() => prefetchPage('/mcp')}
            />
            <CategoryTile
              title="Health"
              description="AI for fitness & wellbeing"
              gradient="bg-gradient-to-br from-red-200 to-pink-200"
              borderColor="border-red-400"
              path="/health-wellness"
              onClick={() => navigate('/health-wellness')}
              onMouseEnter={() => prefetchPage('/health-wellness')}
            />
            <CategoryTile
              title="E-commerce"
              description="AI retail & shopping tools"
              gradient="bg-gradient-to-br from-fuchsia-200 to-purple-200"
              borderColor="border-fuchsia-400"
              path="/ecommerce"
              onClick={() => navigate('/ecommerce')}
              onMouseEnter={() => prefetchPage('/ecommerce')}
            />
            <CategoryTile
              title="Travel"
              description="AI for travel planning"
              gradient="bg-gradient-to-br from-blue-200 to-sky-200"
              borderColor="border-blue-400"
              path="/travel-lifestyle"
              onClick={() => navigate('/travel-lifestyle')}
              onMouseEnter={() => prefetchPage('/travel-lifestyle')}
            />
            <CategoryTile
              title="Gaming"
              description="AI in games & entertainment"
              gradient="bg-gradient-to-br from-violet-200 to-indigo-200"
              borderColor="border-violet-400"
              path="/gaming"
              onClick={() => navigate('/gaming')}
              onMouseEnter={() => prefetchPage('/gaming')}
            />
            <CategoryTile
              title="FAQs"
              description="Answers about AI tools"
              gradient="bg-gradient-to-br from-amber-200 to-yellow-200"
              borderColor="border-amber-400"
              path="/faq"
              onClick={() => navigate('/faq')}
              onMouseEnter={() => prefetchPage('/faq')}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
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