import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  className?: string;
  parentPath?: string;
  currentPage?: string;
}

// Map route paths to readable names
const pathNames: Record<string, string> = {
  'top-tools': 'Top Tools',
  'agents': 'Agents',
  'apps': 'Apps',
  'ai-in-marketing': 'AI in Marketing',
  'video': 'Video',
  'audio': 'Audio',
  'github-repos': 'GitHub Repos',
  'gaming': 'Gaming',
  'travel-lifestyle': 'Travel & Lifestyle',
  'image-design': 'Image Design',
  'content-creation': 'Content Creation',
  'generative-art': 'Generative Art',
  'education': 'Education',
  'personal-productivity': 'Personal Productivity',
  'personal-finance': 'Personal Finance',
  'health-wellness': 'Health & Wellness',
  'ecommerce': 'E-commerce'
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  className = '',
  parentPath,
  currentPage
}) => {
  const location = useLocation();
  
  // If parentPath and currentPage are provided, use them directly
  if (parentPath !== undefined && currentPage) {
    const parentName = parentPath === '/' 
      ? 'Home' 
      : pathNames[parentPath.replace('/', '')] || parentPath.replace('/', '').replace(/-/g, ' ');
    
    return (
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center space-x-1 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 flex items-center"
              aria-label="Home"
            >
              <Home size={14} />
            </Link>
          </li>
          {parentPath !== '/' && (
            <>
              <li className="flex items-center">
                <ChevronRight size={14} className="text-gray-400" />
              </li>
              <li>
                <Link 
                  to={parentPath} 
                  className="text-gray-600 hover:text-gray-900"
                >
                  {parentName}
                </Link>
              </li>
            </>
          )}
          <li className="flex items-center">
            <ChevronRight size={14} className="text-gray-400" />
          </li>
          <li>
            <span className="text-gray-900 font-medium">{currentPage}</span>
          </li>
        </ol>
      </nav>
    );
  }
  
  // Original implementation for backward compatibility
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  // If no path segments, just show Home
  if (pathSegments.length === 0) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const generateStructuredData = () => {
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: window.location.origin
      }
    ];

    pathSegments.forEach((segment, index) => {
      items.push({
        '@type': 'ListItem',
        position: index + 2,
        name: pathNames[segment] || segment,
        item: `${window.location.origin}/${segment}`
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items
    };
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center space-x-1 text-sm">
        <li>
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-900 flex items-center"
            aria-label="Home"
          >
            <Home size={14} />
          </Link>
        </li>
        
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const name = pathNames[segment] || segment.replace(/-/g, ' ');
          
          return (
            <React.Fragment key={path}>
              <li className="flex items-center">
                <ChevronRight size={14} className="text-gray-400" />
              </li>
              <li>
                {isLast ? (
                  <span className="text-gray-900 font-medium">{name}</span>
                ) : (
                  <Link 
                    to={path} 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
      
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </nav>
  );
};

export default Breadcrumb;
