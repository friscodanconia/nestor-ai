import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MousePointer, Smartphone } from 'lucide-react';

export default function WelcomePanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Separate handlers for desktop and mobile
  const handleDesktopHover = (event: React.MouseEvent) => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setIsExpanded(true);
    }
  };

  const handleDesktopLeave = (event: React.MouseEvent) => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setIsExpanded(false);
    }
  };

  const handleMobileClick = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="mb-3 sm:mb-6">
      {/* Brand */}
      <div className="text-center mb-1.5 sm:mb-3">
        <h1 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Nestor
        </h1>
      </div>

      {/* Welcome Panel */}
      <div 
        className={`relative rounded-lg sm:rounded-2xl transition-all duration-300 ease-in-out overflow-hidden
          ${isExpanded ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/40 backdrop-blur-sm cursor-pointer'}
        `}
        onMouseEnter={handleDesktopHover}
        onMouseLeave={handleDesktopLeave}
        onClick={handleMobileClick}
      >
        {/* Header - Always visible */}
        <div className="p-2 sm:p-4 flex justify-center items-center relative">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-sm sm:text-base font-semibold text-gray-900">Read me</span>
            <div className="hidden md:flex items-center text-gray-600">
              <MousePointer className="w-4 h-4" />
            </div>
            <div className="md:hidden flex items-center text-gray-600">
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="md:hidden absolute right-2">
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5 text-gray-600" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-gray-600" />
            )}
          </div>
        </div>

        {/* Expandable Content */}
        <div 
          className={`transition-all duration-300 ease-in-out origin-top
            ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="p-2 sm:p-4 pt-0 space-y-2 sm:space-y-4">
            <p className="text-sm sm:text-base text-gray-800 leading-tight sm:leading-relaxed">
              Welcome to Nestor, your butler for exploring the latest in AI. The space is changing very quickly, there are new tools and models everyday and there are too many links to click and read. We've curated a collection of tools, resources, and insights to help you navigate the space.
            </p>
            <p className="text-sm sm:text-base text-gray-800">
              Browse through the categories to discover:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 space-y-1 sm:space-y-2">
              <li>What kind of no-code tools can you use</li>
              <li>Demos of AI agents and guides to build your own agent</li>
              <li>What are the must-try applications that help productivity</li>
              <li>How to approach AI if you are non-technical</li>
              <li>Cutting-edge video and audio tools</li>
              <li>Innovative open-source projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}