import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function AIBuilders() {
  return (
    <SubPageLayout
      title="AI-Powered App and Website Builders"
      description="Imagine you want to build a website or an app without any coding skills. AI-powered builders let you do just that. You simply describe what you want using everyday language, and the tool automatically creates the design and structure for you. Earlier, you would have to depend on engineering, design, and other functional experts to build on your idea. Now, you can start building on your ideas to prototypes. This makes the process of building digital products much simpler and faster for everyone."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">How to use them?</h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            Start by entering your idea in everyday language through the chat interface. The tool then interprets your words and generally creates a basic design—the frontend that your users interact with. It often takes care of the backend too, setting up the underlying operations that make your project work, as well as a simple database for storing your data. However, the level of automation can vary between tools. Some may handle most of these steps automatically, while others might need extra input or adjustments, especially for more complex backend functions or customized data storage. As you continue the conversation, you can refine the design, add features, or tweak backend settings, ensuring the final product meets your needs before you launch it—all without having to write a single line of code.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="text-base sm:text-lg leading-relaxed">Conversational Interface: Use natural language to guide the tool, making it accessible even if you're not tech-savvy.</li>
            <li className="text-base sm:text-lg leading-relaxed">Automatic Frontend Creation: Quickly generates the visual design and layout of your app or website from your description.</li>
            <li className="text-base sm:text-lg leading-relaxed">Backend and Database Setup: Handles underlying functions and data storage, so you don't have to worry about technical details.</li>
            <li className="text-base sm:text-lg leading-relaxed">Interactive Customization: Allows you to refine and adjust elements by simply chatting with the tool as your project evolves.</li>
            <li className="text-base sm:text-lg leading-relaxed">Preview and Iteration: Offers real-time previews so you can test and modify your creation before launching it.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">My Personal Experience</h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            I have played around with all of these tools. They all have free plans that allow you experiment with how the product works, these free plans are limited by tokens or credits and once you run out of it, you have for wait for them to reset or upgrade. You can see the code being written and the preview next to it. You will also run into challenges when the product mixes up the code and keeps repeating the same mistake. The trick here is trial and error, smarter prompt engineering, and getting better to debug code issues. So while everyone talks about no code tools, understanding the basics and error messages will help you build a finished product. Here is an example of a movie web app that I built using bolt.new, it is at <a href="https://www.cinemagic.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">cinemagic.me</a>. This uses a public API and fetches information about movies, the cast when you enter a search query. I have also implemented some custom ranking and filtering logic to surface more relevant results. For now, I would suggest to sign up and start experimenting with simple apps.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Leading Platforms</h3>
          <div className="space-y-3">
            <div>
              <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Bolt.new</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                <a href="/bolt-guide" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                  Here is how you can build using Bolt, read this guide on how to get started.
                </a>
              </p>
            </div>
            <div>
              <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">lovable.dev</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Create beautiful websites with AI-assisted design and development.</p>
            </div>
            <div>
              <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">v0 by Vercel</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Generate UI components and applications using AI.</p>
            </div>
            <div>
              <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Replit</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Collaborative browser-based IDE with AI-powered coding assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}