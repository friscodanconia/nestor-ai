import { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define the search result type
interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
}

// Define the content data structure
interface ContentItem {
  title: string;
  path: string;
  content: string;
  excerpt: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [contentData, setContentData] = useState<ContentItem[]>([]);
  const navigate = useNavigate();

  // Initialize content data
  useEffect(() => {
    // This would ideally come from a database or API
    // For now, we'll hardcode some content from our pages
    const data: ContentItem[] = [
      {
        title: "AI in Marketing",
        path: "/deeper-questions",
        content: "AI is rapidly changing and impacting industries and functions. How can marketers use AI tools to improve productivity, idea generation, and a host of other use cases. SEO and ASO, Brand, Performance Marketing, Social Media, Creative Operations, Marketing Analytics.",
        excerpt: "How marketers can use AI tools to improve productivity and idea generation."
      },
      {
        title: "SEO and ASO",
        path: "/deeper-questions",
        content: "AI tools can revolutionize your SEO strategy by analyzing vast amounts of data to identify keywords, optimize content, and predict search trends with unprecedented accuracy.",
        excerpt: "AI tools for SEO strategy and keyword optimization."
      },
      {
        title: "Agents",
        path: "/life-advice",
        content: "Understanding AI Agents. Everyone's talking about AI agents - but what exactly are they? Simply put, they're smart software programs that can work on their own to get things done.",
        excerpt: "Get balanced advice about AI agents and how they work."
      },
      {
        title: "Top Tools",
        path: "/quick-answers",
        content: "AI tools are everywhere these days - and it can get overwhelming to pick the right ones. We're focusing on tools for regular users like us.",
        excerpt: "Navigate the AI tools landscape with our curated recommendations."
      },
      {
        title: "Apps",
        path: "/storytelling",
        content: "The AI landscape evolves at breakneck speed, with new models and applications emerging weekly. ChatGPT, Claude, Bolt.new, Replit, Replika.",
        excerpt: "Discover must-try AI applications and tools."
      },
      {
        title: "Video Tools",
        path: "/spirituality",
        content: "Discover powerful video tools and technologies that help you create, edit, and enhance your video content.",
        excerpt: "Explore video creation and editing tools powered by AI."
      },
      {
        title: "Audio Tools",
        path: "/emotional-reflection",
        content: "Experience the power of audio tools and technologies that transform the way you create, edit, and interact with sound.",
        excerpt: "Transform your audio content with AI-powered tools."
      },
      {
        title: "Github Repos",
        path: "/github-repos",
        content: "Explore our curated collection of innovative AI and machine learning repositories that are pushing the boundaries of what's possible.",
        excerpt: "Cool git repos for AI and machine learning enthusiasts."
      },
      {
        title: "Bolt Guide",
        path: "/bolt-guide",
        content: "Bolt is an AI-powered development environment that helps you build web applications quickly.",
        excerpt: "Learn how to use Bolt for rapid web application development."
      },
      {
        title: "AI Builders",
        path: "/quick-answers/ai-builders",
        content: "AI-powered builders let you build a website or an app without any coding skills. You simply describe what you want using everyday language.",
        excerpt: "Build websites and apps with AI, no coding required."
      },
      {
        title: "Website Builders",
        path: "/quick-answers/website-builders",
        content: "Discover powerful no-code website builders that enable you to create professional websites without writing code.",
        excerpt: "Create professional websites without coding."
      }
    ];
    
    setContentData(data);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    
    // Search through the content data
    const searchResults = contentData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(searchResults);
  };

  const handleResultClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  // Close search on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Prevent body scroll when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Search Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Search"
      >
        <SearchIcon className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="container mx-auto max-w-2xl pt-20 px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Search Header */}
              <div className="p-4 border-b">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border-none focus:ring-0 text-lg"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="divide-y">
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.path)}
                        className="block w-full text-left p-4 hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {result.title}
                        </h3>
                        <p className="text-gray-600">{result.excerpt}</p>
                      </button>
                    ))}
                  </div>
                ) : query ? (
                  <div className="p-4 text-center text-gray-500">
                    No results found for "{query}"
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    Start typing to search...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}