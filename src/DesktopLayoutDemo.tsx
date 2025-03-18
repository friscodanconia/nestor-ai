import React from 'react';
import { Wrench, Users, AppWindow, UserRound, Headphones, Github } from 'lucide-react';
import { Video as VideoIcon } from 'lucide-react';
import './styles/desktopLayout.css';

// Demo component to show the desktop layout improvements
export default function DesktopLayoutDemo() {
  return (
    <div className="min-h-screen bg-[#FDF6F0]">
      {/* Header */}
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">Nestor</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg 
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6 desktop-container">
        {/* Welcome Panel */}
        <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Read me</h2>
          <p className="text-gray-600">Welcome to Nestor, your guide to AI tools and resources.</p>
        </div>

        {/* Cards - Desktop Grid Layout */}
        <div className="space-y-3 sm:space-y-4 desktop-grid">
          {/* Top Tools - Featured Card */}
          <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl p-4 sm:p-5 flex items-center desktop-card-hover desktop-featured-card desktop-full-width">
            <div className="bg-white/30 p-3 rounded-full mr-4">
              <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">Top Tools</h2>
              <p className="text-gray-700">Best no-code tools</p>
            </div>
          </div>

          {/* Agents Card */}
          <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded-xl p-4 sm:p-5 flex items-center desktop-card-hover">
            <div className="bg-white/30 p-3 rounded-full mr-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">Agents</h2>
              <p className="text-gray-700">Agents in action</p>
            </div>
          </div>

          {/* Apps Card */}
          <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl p-4 sm:p-5 flex items-center desktop-card-hover">
            <div className="bg-white/30 p-3 rounded-full mr-4">
              <AppWindow className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">Apps</h2>
              <p className="text-gray-700">Must try apps</p>
            </div>
          </div>

          {/* AI in Marketing Card */}
          <div className="bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 rounded-xl p-4 sm:p-5 flex items-center desktop-card-hover">
            <div className="bg-white/30 p-3 rounded-full mr-4">
              <UserRound className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">AI in Marketing</h2>
              <p className="text-gray-700">How can marketers use AI</p>
            </div>
          </div>

          {/* Video Card */}
          <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-xl p-4 sm:p-5 flex items-center desktop-card-hover">
            <div className="bg-white/30 p-3 rounded-full mr-4">
              <VideoIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">Video</h2>
              <p className="text-gray-700">Explore video tools</p>
            </div>
          </div>

          {/* Audio Card */}
          <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-xl p-4 sm:p-5 flex items-center desktop-card-hover">
            <div className="bg-white/30 p-3 rounded-full mr-4">
              <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">Audio</h2>
              <p className="text-gray-700">Try Audio tools</p>
            </div>
          </div>

          {/* Github Repos - Featured Card */}
          <div className="bg-gradient-to-br from-violet-200 to-purple-200 rounded-xl p-4 sm:p-5 flex items-center desktop-card-hover desktop-featured-card desktop-full-width">
            <div className="bg-white/30 p-3 rounded-full mr-4">
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">Github Repos</h2>
              <p className="text-gray-700">Cool git repos you can check out</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-gray-500">
        <p>nestor.guide</p>
      </footer>
    </div>
  );
}
