import React, { memo } from 'react';
import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

// Memoize the content to prevent unnecessary re-renders
const WebsiteAppContent = memo(() => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold mb-3">How to use them?</h3>
      <p className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">
        They have free plans which allow you certain number of actions or features post which you have to upgrade. There are some pre-defined templates, you can drag and drop images. I was able to use the Adalo free template to build a journal app and link my CSV to populate my own data. If you are just starting out, these are good starting points to experiment.
      </p>
      
      {/* Lazy load image */}
      <div className="rounded-lg overflow-hidden shadow-lg my-6">
        <img 
          loading="lazy"
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800"
          alt="Design system and components"
          className="w-full h-64 object-cover"
        />
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
      <p className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">
        Our website and app builders come with a comprehensive set of features:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Visual drag-and-drop interfaces</li>
        <li className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Pre-built components and templates</li>
        <li className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Responsive design capabilities</li>
        <li className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Built-in hosting and deployment</li>
        <li className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Integration with other tools and services</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">My Personal Experience</h3>
      <p className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">
        I have tried a lot of these templated tools. While they look attractive and easy, it becomes cumbersome when you want to build your own design and vision and it starts running into constraints as those ideas may not neatly fit in the box. I have now moved away from these tools, but if you are starting on this journey, trying their free plans will give you an idea of how these tools work.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Popular Tools</h3>
      <div className="space-y-4">
        <div>
          <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Webflow</a>
          <p className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Professional website builder with advanced design capabilities and CMS features ($18/month).</p>
        </div>
        <div>
          <a href="https://www.adalo.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Adalo</a>
          <p className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Create native mobile apps with a visual interface and powerful functionality ($45/month).</p>
        </div>
        <div>
          <a href="https://thunkable.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Thunkable</a>
          <p className="text-base sm:text-lg text-gray-800 leading-snug sm:leading-relaxed">Build cross-platform mobile apps using drag-and-drop components ($59/month).</p>
        </div>
      </div>
    </div>
  </div>
));

WebsiteAppContent.displayName = 'WebsiteAppContent';

export default function WebsiteAppBuilders() {
  return (
    <SubPageLayout
      title="Website and App Builders"
      description="Website and app builders are powerful no-code platforms that enable anyone to create professional digital experiences without writing code. These tools provide visual interfaces, drag-and-drop functionality, and pre-built components that make web and app development accessible to everyone."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <WebsiteAppContent />
    </SubPageLayout>
  );
}