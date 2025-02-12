import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SubPageLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  backLink: string;
  children: React.ReactNode;
}

export default function SubPageLayout({
  title,
  description,
  icon,
  gradient,
  backLink,
  children
}: SubPageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${gradient}`}>
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate(backLink)}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        <div className="prose prose-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">{title}</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-800 leading-snug sm:leading-relaxed">{description}</p>
          {children}
        </div>
      </main>
    </div>
  );
}