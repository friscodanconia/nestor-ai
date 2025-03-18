import { useState, useEffect, useRef, KeyboardEventHandler } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import all category data
import { agentsData } from '../data/categories/agents';
import { aiInMarketingData } from '../data/categories/aiInMarketing';
import { appsData } from '../data/categories/apps';
import { audioData } from '../data/categories/audio';
import { contentCreationData } from '../data/categories/contentCreation';
import { ecommerceData } from '../data/categories/ecommerce';
import { educationData } from '../data/categories/education';
import { gamingData } from '../data/categories/gaming';
import { generativeArtData } from '../data/categories/generativeArt';
import { githubReposData } from '../data/categories/githubRepos';
import { healthWellnessData } from '../data/categories/healthWellness';
import { imageDesignData } from '../data/categories/imageDesign';
import { personalFinanceData } from '../data/categories/personalFinance';
import { personalProductivityData } from '../data/categories/personalProductivity';
import { topToolsData } from '../data/categories/topTools';
import { travelLifestyleData } from '../data/categories/travelLifestyle';
import { videoData } from '../data/categories/video';
import { faqData } from '../data/faqData';
import { blogPosts } from '../data/blogData';

// Define the search result type
interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  relevanceScore: number;
  category: string;
}

// Define the content data structure
interface ContentItem {
  title: string;
  path: string;
  content: string;
  excerpt: string;
  category: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [contentData, setContentData] = useState<ContentItem[]>([]);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Initialize content data from all category files
  useEffect(() => {
    // Function to extract searchable content from category data
    const extractContentFromCategory = (data: any, path: string): ContentItem[] => {
      const items: ContentItem[] = [];
      const categoryName = data.title || path.replace('/', '');
      
      // Add main category
      if (data.title && data.description) {
        items.push({
          title: data.title,
          path,
          content: data.description || '',
          excerpt: data.description ? data.description.substring(0, 120) + '...' : '',
          category: categoryName
        });
      }
      
      // Add special features if available
      if (data.specialFeatures?.examples) {
        data.specialFeatures.examples.forEach((example: any) => {
          if (example.title && example.description) {
            items.push({
              title: example.title,
              path,
              content: example.description || '',
              excerpt: example.description ? example.description.substring(0, 120) + '...' : '',
              category: categoryName
            });
          }
        });
      }
      
      // Add agent types if available
      if (data.agentTypes) {
        data.agentTypes.forEach((type: any) => {
          if (type.title && type.description) {
            items.push({
              title: type.title,
              path,
              content: type.description || '',
              excerpt: type.description ? type.description.substring(0, 120) + '...' : '',
              category: categoryName
            });
          }
        });
      }
      
      // Add tools if available
      if (data.toolCategories) {
        data.toolCategories.forEach((category: any) => {
          if (category.tools) {
            category.tools.forEach((tool: any) => {
              if (tool.name && tool.description) {
                items.push({
                  title: tool.name,
                  path,
                  content: tool.description || '',
                  excerpt: tool.description ? tool.description.substring(0, 120) + '...' : '',
                  category: categoryName
                });
              }
            });
          }
        });
      }
      
      // Add topics if available (for aiInMarketing)
      if (data.topics) {
        data.topics.forEach((topic: any) => {
          if (topic.title && topic.description) {
            items.push({
              title: topic.title,
              path,
              content: topic.description || '',
              excerpt: topic.description ? topic.description.substring(0, 120) + '...' : '',
              category: categoryName
            });
          }
        });
      }
      
      // Add examples if available
      if (data.examples) {
        data.examples.forEach((example: any) => {
          if (example.name && example.description) {
            items.push({
              title: example.name,
              path,
              content: example.description || '',
              excerpt: example.description ? example.description.substring(0, 120) + '...' : '',
              category: categoryName
            });
          }
        });
      }
      
      return items;
    };
    
    try {
      // Combine all category data
      const allContentData: ContentItem[] = [
        ...extractContentFromCategory(agentsData, '/agents'),
        ...extractContentFromCategory(aiInMarketingData, '/ai-in-marketing'),
        ...extractContentFromCategory(appsData, '/apps'),
        ...extractContentFromCategory(audioData, '/audio'),
        ...extractContentFromCategory(contentCreationData, '/content-creation'),
        ...extractContentFromCategory(ecommerceData, '/ecommerce'),
        ...extractContentFromCategory(educationData, '/education'),
        ...extractContentFromCategory(gamingData, '/gaming'),
        ...extractContentFromCategory(generativeArtData, '/generative-art'),
        ...extractContentFromCategory(githubReposData, '/github-repos'),
        ...extractContentFromCategory(healthWellnessData, '/health-wellness'),
        ...extractContentFromCategory(imageDesignData, '/image-design'),
        ...extractContentFromCategory(personalFinanceData, '/personal-finance'),
        ...extractContentFromCategory(personalProductivityData, '/personal-productivity'),
        ...extractContentFromCategory(topToolsData, '/top-tools'),
        ...extractContentFromCategory(travelLifestyleData, '/travel-lifestyle'),
        ...extractContentFromCategory(videoData, '/video'),
        
        // Add FAQ data
        ...faqData.map(faq => ({
          title: faq.question,
          path: '/faq',
          content: faq.answer,
          excerpt: faq.answer.substring(0, 120) + '...',
          category: 'FAQ'
        })),
        
        // Add Blog data
        ...blogPosts.map(post => ({
          title: post.title,
          path: '/blog',
          content: post.content,
          excerpt: post.excerpt,
          category: 'Blog'
        }))
      ];
      
      console.log(`Loaded ${allContentData.length} searchable items from categories`);
      setContentData(allContentData);
    } catch (error) {
      console.error("Error loading content data:", error);
    }
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    
    // Improved search algorithm with relevance scoring
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const searchResults = contentData.map(item => {
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();
      
      // Calculate relevance score
      let relevanceScore = 0;
      let matchedExcerpt = item.excerpt;
      
      // Check for exact title match (highest relevance)
      if (titleLower === searchQuery.toLowerCase()) {
        relevanceScore += 100;
      }
      
      // Check for title containing the full search query
      else if (titleLower.includes(searchQuery.toLowerCase())) {
        relevanceScore += 80;
      }
      
      // Check for individual terms in title (high relevance)
      const titleMatches = searchTerms.filter(term => titleLower.includes(term));
      relevanceScore += titleMatches.length * 15;
      
      // Check for individual terms in content (medium relevance)
      const contentMatches = searchTerms.filter(term => contentLower.includes(term));
      relevanceScore += contentMatches.length * 5;
      
      // Generate dynamic excerpt if we have content matches
      if (contentMatches.length > 0 && searchTerms.length > 0) {
        // Find the position of the first search term in the content
        const firstTermIndex = Math.min(
          ...searchTerms.map(term => {
            const index = contentLower.indexOf(term);
            return index >= 0 ? index : Infinity;
          })
        );
        
        if (firstTermIndex !== Infinity) {
          // Create a contextual excerpt around the first match
          const startPos = Math.max(0, firstTermIndex - 40);
          const endPos = Math.min(item.content.length, firstTermIndex + 80);
          
          // Add ellipsis if we're not starting from the beginning
          const prefix = startPos > 0 ? '...' : '';
          const suffix = endPos < item.content.length ? '...' : '';
          
          matchedExcerpt = prefix + item.content.substring(startPos, endPos) + suffix;
        }
      }
      
      return {
        title: item.title,
        path: item.path,
        excerpt: matchedExcerpt,
        relevanceScore,
        category: item.category
      };
    })
    .filter(result => result.relevanceScore > 0) // Only include results with matches
    .sort((a, b) => b.relevanceScore - a.relevanceScore); // Sort by relevance score (highest first)
    
    setResults(searchResults.slice(0, 10)); // Limit to top 10 results for performance
  };

  const handleResultClick = (path: string) => {
    setIsOpen(false);
    setQuery('');
    navigate(path);
  };

  // Handle keyboard navigation
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (results.length === 0) return;

    // Arrow down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedResultIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
      
      // Scroll into view if needed
      if (resultsContainerRef.current && selectedResultIndex >= 0) {
        const resultElements = resultsContainerRef.current.querySelectorAll('button');
        if (resultElements[selectedResultIndex + 1]) {
          resultElements[selectedResultIndex + 1].scrollIntoView({ block: 'nearest' });
        }
      }
    }
    
    // Arrow up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedResultIndex(prev => 
        prev > 0 ? prev - 1 : prev
      );
      
      // Scroll into view if needed
      if (resultsContainerRef.current && selectedResultIndex > 0) {
        const resultElements = resultsContainerRef.current.querySelectorAll('button');
        if (resultElements[selectedResultIndex - 1]) {
          resultElements[selectedResultIndex - 1].scrollIntoView({ block: 'nearest' });
        }
      }
    }
    
    // Enter key
    else if (e.key === 'Enter' && selectedResultIndex >= 0) {
      e.preventDefault();
      handleResultClick(results[selectedResultIndex].path);
    }
  };

  // Reset selected index when results change
  useEffect(() => {
    setSelectedResultIndex(-1);
  }, [results]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

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

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isSearchBarFocused && !target.closest('.search-container')) {
        setIsSearchBarFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchBarFocused]);

  return (
    <div className="search-container relative w-full">
      {/* Enhanced Search Bar - Always visible */}
      <div className={`flex items-center justify-center ${isOpen ? 'hidden' : 'block'}`}>
        <div 
          className={`
            relative flex items-center bg-white/80 backdrop-blur-sm rounded-full 
            border border-gray-200 shadow-sm transition-all duration-300 ease-in-out
            md:w-full w-[75%] mx-auto
            ${isSearchBarFocused ? 'ring-2 ring-purple-300' : 'hover:ring-1 hover:ring-gray-300'}
            animate-pulse-subtle !important
          `}
          style={{ animation: 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
        >
          <SearchIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-600 ml-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search Nestor..."
            className="w-full py-2.5 px-2 bg-transparent border-none focus:ring-0 text-sm md:text-base"
            onClick={() => setIsOpen(true)}
            onFocus={() => setIsSearchBarFocused(true)}
            readOnly
          />
        </div>
      </div>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="container mx-auto max-w-2xl pt-20 px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Search Header */}
              <div className="p-4 border-b">
                <div className="relative flex items-center bg-gray-50 rounded-lg">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for tools, guides, concepts..."
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-10 pr-10 py-2 border-none focus:ring-0 text-lg bg-gray-50 rounded-lg"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div ref={resultsContainerRef} className="max-h-[60vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="divide-y">
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.path)}
                        className={`block w-full text-left p-4 transition-colors ${
                          index === selectedResultIndex 
                            ? 'bg-purple-50 border-l-4 border-purple-500' 
                            : 'hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-lg font-medium text-gray-900">
                            {result.title}
                          </h3>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{result.excerpt}</p>
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
    </div>
  );
}