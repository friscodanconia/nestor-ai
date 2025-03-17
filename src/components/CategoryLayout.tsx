import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollapsibleSection from './CollapsibleSection';

interface CategoryLayoutProps {
  title: string;
  icon: React.ReactNode;
  gradientClasses: string;
  description: string;
  mobileContent: React.ReactNode;
  desktopContent: React.ReactNode;
}

export default function CategoryLayout({
  title,
  icon,
  gradientClasses,
  description,
  mobileContent,
  desktopContent
}: CategoryLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${gradientClasses}`}>
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
          title="Go back to home page"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <div className="w-9" />
      </header>

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
