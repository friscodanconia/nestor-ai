import { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ title: string; path: string; excerpt: string }>>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    // For now, we'll just search through some hardcoded content
    // Later this will be connected to a proper search backend
    const demoResults = [
      {
        title: "Life Advice",
        path: "/life-advice",
        excerpt: "Get balanced advice that combines empathy with practical solutions."
      },
      {
        title: "Career Decisions",
        path: "/life-advice/career",
        excerpt: "Navigate your professional growth and career transitions."
      },
      // Add more demo results as needed
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(demoResults);
  };

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
                      <a
                        key={index}
                        href={result.path}
                        className="block p-4 hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {result.title}
                        </h3>
                        <p className="text-gray-600">{result.excerpt}</p>
                      </a>
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