import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  className?: string;
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
  'travel-lifestyle': 'Travel & Lifestyle'
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // Don't show breadcrumbs on the home page
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
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex items-center space-x-1">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center">
            <Home size={16} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          
          return (
            <React.Fragment key={path}>
              <li className="flex items-center">
                <ChevronRight size={14} className="text-gray-400" />
              </li>
              <li>
                {isLast ? (
                  <span className="font-medium text-gray-900" aria-current="page">
                    {pathNames[segment] || segment}
                  </span>
                ) : (
                  <Link 
                    to={path} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {pathNames[segment] || segment}
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
