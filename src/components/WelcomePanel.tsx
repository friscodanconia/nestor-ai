import { useState } from 'react';
import { ChevronDown, ChevronUp, MousePointer, Smartphone } from 'lucide-react';

export default function WelcomePanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Separate handlers for desktop and mobile
  const handleDesktopHover = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setIsExpanded(true);
    }
  };

  const handleDesktopLeave = () => {
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
            <span className="text-xs sm:text-sm font-semibold text-gray-900">Read me</span>
            <div className="hidden md:flex items-center text-gray-600">
              <MousePointer className="w-4 h-4" />
            </div>
            <div className="md:hidden flex items-center text-gray-600">
              <Smartphone className="w-4 h-4" />
            </div>
          </div>
          <div className="absolute right-2 sm:right-4">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </div>
        </div>

        {/* Content - Only visible when expanded */}
        <div 
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="p-3 sm:p-4 pt-0 sm:pt-0 text-sm sm:text-base text-gray-700">
            <p className="mb-2">
              Nestor is your guide to AI tools and resources.
            </p>
            <p className="mb-2">
              You can browse topics below that interest you
            </p>
            <p>
              Or use the search bar above to quickly jump into topics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}