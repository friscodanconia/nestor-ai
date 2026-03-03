import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Home } from 'lucide-react';
import { faqData, FAQItem } from '../data/faqDataExport';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get unique categories
  const categories = Array.from(new Set(faqData.map(faq => faq.category)));

  // Filter FAQs based on search query and active category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Home Button */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800">
          <Home className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h1>
      <p className="text-gray-600 text-center mb-8">Find answers to common questions about AI tools and technology</p>
      
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="max-w-3xl mx-auto mb-8 flex flex-wrap gap-2 justify-center">
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
      
      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No FAQs found matching your search. Try different keywords or clear the search.
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't see your question? <a href="#" className="text-purple-600 hover:underline">Contact us</a> for more information.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
