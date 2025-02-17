import React, { useState } from 'react';
import { Wrench, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollapsibleSection from '../components/CollapsibleSection';

export default function QuickAnswers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200">
      <header className="p-4 sm:p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
          {/* Category 1: Main Title */}
          <h1 className="text-2xl font-bold text-gray-900">Top Tools</h1>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 sm:py-6">
        {/* Category 2: Section Title */}
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Our Top Picks</h2>
        {/* Category 3: Body Text */}
        <p className="text-base text-gray-700 mb-8">
          AI tools are everywhere these days - and it can get overwhelming to pick the right ones. We're focusing on tools for regular users like us, since enterprises need different things (like security certifications, user management, and API access). Whether you're looking for free tools to play around with or affordable premium options, there's something for everyone. We've spent countless hours testing these tools ourselves, and here's our honest take on the ones that actually deliver results. Since AI moves fast, we'll keep this guide fresh with new finds and updates.
        </p>

        {/* Mobile View - Collapsible Sections */}
        <div className="md:hidden space-y-2">
          <CollapsibleSection title="General Purpose AI assistants" defaultExpanded={true}>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">ChatGPT</a> - versatile assistant, helps with writing, coding, brainstorming, problem solving. Three plans: free (basic features), Plus ($20/month), and Pro ($200/month).
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I use the Plus plan. While I tried Pro, I didn't find enough extra value to justify the higher cost.
              </p>
              <p className="text-base text-gray-700">
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Claude</a> excels in a lot of general purpose tools, manages long documents well and is really good at coding. It does run into token limits both for free and paid plans. Paid plan is $20/month.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> My go-to tool, I use the Pro Plan and absolutely love it.
              </p>
              <p className="text-base text-gray-700">
                <span className="font-bold">Others:</span> I have also tried other assistants and have included them here, please feel free to try them out. <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Google Gemini</a>, <a href="https://deepseek.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Deepseek</a>, <a href="https://chat.mistral.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Mistral</a>, <a href="https://meta.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Llama</a>, and <a href="https://x.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Grok</a>.
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Search Assistant">
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Perplexity</a> - all purpose product that combines search with conversational ability of chatbot. It has free and paid plans, introduces new features regularly and has Deepseek, OpenAI models integrated in it. Native app available for iOS, Android, Mac, and web.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> My most used app across devices, I don't remember the last time I went to google.
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Generative Art and Video">
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Gen AI has revolutionized visual arts and video production. Text-to-image models like DALL-E create stunning visuals from written descriptions, while text-to-video tools generate short clips from prompts. Image-to-video AI animates still photos, and video-to-video technology alters existing footage.
              </p>
              <p className="text-base text-gray-700">
                I have tried tools like <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Midjourney</a>, <a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">DALL-E</a>, <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Runway</a>, <a href="https://prisma-ai.com/lensa" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Lensa</a>, <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Hailuoai</a>, and <a href="https://www.klingai.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Klingai</a>. While these are great tools for experimentation, I have struggled to get consistent outputs out of them.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I have tried and found <a href="https://freepik.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Freepik</a> AI suite to be most friendly with lot of features and functionalities.
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Website and App Builders">
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                The trend is moving from drag-and-drop interfaces like <a href="https://wix.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Wix</a>, <a href="https://www.squarespace.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Squarespace</a> to new age tools like <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">bolt.new</a>, <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">lovable.dev</a>, <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Replit</a> where you can use natural language prompts to build websites and apps. This website has been built using bolt.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I have used a combination of tools to build experiences. I start with Claude for ideation (in some cases code generation), or I can copy paste a design to bolt and ask it to generate a code. From there, I iterate and experiment till I hit results. I built <a href="https://cinemagic.me" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">movie search app</a> using Claude completely and built my <a href="https://soumyosinha.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">personal website</a> using a combination of Claude and bolt.
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Audio Assistants">
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Audio AI apps have revolutionized sound creation and interaction. They generate realistic voices, compose music, and convert documents to audio. Apps like <a href="https://murf.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Murf AI</a> create voiceovers, <a href="https://www.suno.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Suno</a> composes songs, <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Notebook LM</a> turns documents into podcasts, and <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Eleven Labs</a> can clone voices and generate hyper-realistic speech in multiple languages. These user-friendly tools enable anyone to produce professional-sounding audio content for various purposes.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I like Notebook LM from Google, where I enter a document (pdf, word doc), convert into a podcast and listen to it on my walks.
              </p>
            </div>
          </CollapsibleSection>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          <div>
            {/* Category 2: Section Title */}
            <h3 className="text-xl font-semibold mb-4">
              General Purpose AI assistants
            </h3>
            {/* Category 3: Body Text */}
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">ChatGPT</a> - versatile assistant, helps with writing, coding, brainstorming, problem solving. Three plans: free (basic features), Plus ($20/month), and Pro ($200/month).
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I use the Plus plan. While I tried Pro, I didn't find enough extra value to justify the higher cost.
              </p>
              <p className="text-base text-gray-700">
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Claude</a> excels in a lot of general purpose tools, manages long documents well and is really good at coding. It does run into token limits both for free and paid plans. Paid plan is $20/month.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> My go-to tool, I use the Pro Plan and absolutely love it.
              </p>
              <p className="text-base text-gray-700">
                <span className="font-bold">Others:</span> I have also tried other assistants and have included them here, please feel free to try them out. <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Google Gemini</a>, <a href="https://deepseek.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Deepseek</a>, <a href="https://chat.mistral.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Mistral</a>, <a href="https://meta.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Llama</a>, and <a href="https://x.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Grok</a>.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Search Assistant
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Perplexity</a> - all purpose product that combines search with conversational ability of chatbot. It has free and paid plans, introduces new features regularly and has Deepseek, OpenAI models integrated in it. Native app available for iOS, Android, Mac, and web.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> My most used app across devices, I don't remember the last time I went to google.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Generative Art and Video
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Gen AI has revolutionized visual arts and video production. Text-to-image models like DALL-E create stunning visuals from written descriptions, while text-to-video tools generate short clips from prompts. Image-to-video AI animates still photos, and video-to-video technology alters existing footage.
              </p>
              <p className="text-base text-gray-700">
                I have tried tools like <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Midjourney</a>, <a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">DALL-E</a>, <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Runway</a>, <a href="https://prisma-ai.com/lensa" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Lensa</a>, <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Hailuoai</a>, and <a href="https://www.klingai.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Klingai</a>. While these are great tools for experimentation, I have struggled to get consistent outputs out of them.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I have tried and found <a href="https://freepik.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Freepik</a> AI suite to be most friendly with lot of features and functionalities.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Website and App Builders
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                The trend is moving from drag-and-drop interfaces like <a href="https://wix.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Wix</a>, <a href="https://www.squarespace.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Squarespace</a> to new age tools like <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">bolt.new</a>, <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">lovable.dev</a>, <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Replit</a> where you can use natural language prompts to build websites and apps. This website has been built using bolt.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I have used a combination of tools to build experiences. I start with Claude for ideation (in some cases code generation), or I can copy paste a design to bolt and ask it to generate a code. From there, I iterate and experiment till I hit results. I built <a href="https://cinemagic.me" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">movie search app</a> using Claude completely and built my <a href="https://soumyosinha.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">personal website</a> using a combination of Claude and bolt.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Audio Assistants
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                Audio AI apps have revolutionized sound creation and interaction. They generate realistic voices, compose music, and convert documents to audio. Apps like <a href="https://murf.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Murf AI</a> create voiceovers, <a href="https://www.suno.ai" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Suno</a> composes songs, <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Notebook LM</a> turns documents into podcasts, and <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-800">Eleven Labs</a> can clone voices and generate hyper-realistic speech in multiple languages. These user-friendly tools enable anyone to produce professional-sounding audio content for various purposes.
              </p>
              <p className="text-base text-gray-700 italic">
                <i className="not-italic font-bold">Personal experience:</i> I like Notebook LM from Google, where I enter a document (pdf, word doc), convert into a podcast and listen to it on my walks.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}