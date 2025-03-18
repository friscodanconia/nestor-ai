import React from 'react';
import { Github } from 'lucide-react';
import CategoryLayout from '../../components/CategoryLayout';
import SEO from '../../components/SEO';

const ApplicationsRepos = () => {
  // Mobile content
  const mobileContent = (
    <>
      <SEO 
        title="AI Applications & Tools"
        description="Explore repositories for practical AI applications and tools that are ready to use or integrate into your projects."
        keywords="AI applications, AI tools, practical AI, AI integrations, AI software"
      />
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Featured Repositories</h2>
        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          Explore repositories for practical AI applications and tools that are ready to use or integrate into your projects.
        </p>
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
          <ul className="space-y-3 text-gray-800">
            <li>
              <a 
                href="https://github.com/openai/whisper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Whisper</h3>
                  <p className="mt-1 text-sm">OpenAI's robust speech recognition model</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/openai/CLIP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">CLIP</h3>
                  <p className="mt-1 text-sm">OpenAI's model for connecting text and images</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/huggingface/transformers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Transformers</h3>
                  <p className="mt-1 text-sm">Hugging Face's state-of-the-art NLP library</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">Stable Diffusion WebUI</h3>
                  <p className="mt-1 text-sm">Browser interface for Stable Diffusion</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/microsoft/DeepSpeed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">DeepSpeed</h3>
                  <p className="mt-1 text-sm">Microsoft's deep learning optimization library</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  // Desktop content (same as mobile for now)
  const desktopContent = mobileContent;

  return (
    <CategoryLayout
      title="AI Applications & Tools"
      icon={<Github className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-violet-200 to-purple-200"
      description="Explore repositories for practical AI applications and tools that are ready to use or integrate into your projects."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      breadcrumbParent="/github-repos"
    />
  );
};

export default ApplicationsRepos;