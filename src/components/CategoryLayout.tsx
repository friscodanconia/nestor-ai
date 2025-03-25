import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollapsibleSection from './CollapsibleSection';
import Breadcrumb from './Breadcrumb';

interface CategoryLayoutProps {
  title: string;
  icon: React.ReactNode;
  gradientClasses: string;
  description: string;
  mobileContent: React.ReactNode;
  desktopContent: React.ReactNode;
  breadcrumbParent?: string; // Optional parent path for breadcrumb navigation
}

export default function CategoryLayout({
  title,
  icon,
  gradientClasses,
  description,
  mobileContent,
  desktopContent,
  breadcrumbParent = '/' // Default to home if not specified
}: CategoryLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${gradientClasses}`}>
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate(breadcrumbParent)}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
          title="Go back to parent page"
          aria-label="Go back to parent page"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <div className="w-9" />
      </header>

      {/* Breadcrumb navigation */}
      <div className="px-4 sm:px-6 mb-2">
        <Breadcrumb parentPath={breadcrumbParent} currentPage={title} className="bg-white/30 backdrop-blur-sm rounded-lg py-2 px-3 inline-block" />
      </div>
      
      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Mobile View - Collapsible Sections */}
        <div className="md:hidden space-y-2">
          {mobileContent}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          {desktopContent}
        </div>
      </main>
    </div>
  );
}
