import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BoltGuide() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4">
      <header className="max-w-3xl mx-auto mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </header>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Getting Started with Bolt</h1>
        
        <div className="space-y-8">
          <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Bolt?</h2>
            <p className="text-gray-700 leading-relaxed">
              Bolt is an AI-powered development environment that helps you build web applications quickly. 
              It combines the power of natural language processing with modern development tools to create 
              a seamless development experience.
            </p>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-medium">Visit bolt.new</span>
                <p className="ml-6 mt-2">
                  Open your browser and navigate to bolt.new. You'll be greeted with an intuitive interface 
                  where you can start your project.
                </p>
              </li>
              <li>
                <span className="font-medium">Describe Your Project</span>
                <p className="ml-6 mt-2">
                  Use natural language to describe what you want to build. Be specific about features, 
                  design preferences, and functionality.
                </p>
              </li>
              <li>
                <span className="font-medium">Iterate and Refine</span>
                <p className="ml-6 mt-2">
                  Review the generated code and preview. You can continue the conversation to refine 
                  and add features until your application meets your requirements.
                </p>
              </li>
              <li>
                <span className="font-medium">Deploy Your Application</span>
                <p className="ml-6 mt-2">
                  Once satisfied, deploy your application with a single click to make it live on the internet.
                </p>
              </li>
            </ol>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Best Practices</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Be specific in your requirements</li>
              <li>Test features as they're implemented</li>
              <li>Use version control for your changes</li>
              <li>Document your application as you build</li>
              <li>Follow security best practices</li>
            </ul>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-700 leading-relaxed">
              If you need assistance or have questions, the Bolt community is here to help. Visit our 
              documentation or join our Discord community for support.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}