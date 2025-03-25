import React, { useState } from 'react';
import { Search, Calendar, User, Tag, Home } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter blog posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === null || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Home Button */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800">
          <Home className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-2 text-center">Nestor AI Blog</h1>
      <p className="text-gray-600 text-center mb-8">Latest insights, tutorials, and trends in AI technology</p>
      
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-2 justify-center">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === null 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All Categories
        </button>
        
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{formatDate(post.date)}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author.name}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Want to contribute to our blog? <a href="#" className="text-purple-600 hover:underline">Contact us</a> with your article ideas.
        </p>
      </div>
    </div>
  );
};

export default Blog;
