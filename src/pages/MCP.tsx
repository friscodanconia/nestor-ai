import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const MCP: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF6F0] py-8 px-4">
      <SEO 
        title="Model Context Protocol (MCP)"
        description="Learn about the Model Context Protocol (MCP) and how it works with AI systems."
        keywords="MCP, Model Context Protocol, AI protocol, context protocol"
        schemaType="Article"
      />
      
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Model Context Protocol (MCP)</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">What is Model Context Protocol?</h2>
          <p className="text-gray-700 mb-4">
            The Model Context Protocol (MCP) is a framework for structuring and managing the context that AI models use to generate responses. It provides a standardized way to organize information, instructions, and constraints that guide AI behavior.
          </p>
          <p className="text-gray-700 mb-4">
            MCP helps ensure that AI systems have the right information at the right time, improving the quality, relevance, and safety of AI-generated content.
          </p>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Key Components of MCP:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Context management for large language models</li>
            <li>Structured information retrieval and organization</li>
            <li>Memory systems for persistent knowledge</li>
            <li>Instruction formatting and prioritization</li>
            <li>Safety guardrails and constraint enforcement</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Benefits of MCP:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Improved response quality and relevance</li>
            <li>Better handling of complex, multi-step tasks</li>
            <li>Enhanced safety and alignment with human values</li>
            <li>More efficient use of context window limitations</li>
            <li>Standardized approach to AI system design</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Applications of MCP</h2>
          <p className="text-gray-700 mb-4">
            MCP is used in various AI applications, from chatbots and virtual assistants to content generation tools and specialized AI agents. It helps create more reliable, helpful, and safe AI systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">AI Assistants</h3>
              <p className="text-gray-700 text-sm">
                MCP helps virtual assistants maintain conversation context and provide more helpful, personalized responses.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Content Creation</h3>
              <p className="text-gray-700 text-sm">
                Writers and creators use MCP-enabled tools to generate content that follows specific guidelines and maintains consistency.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Code Generation</h3>
              <p className="text-gray-700 text-sm">
                Developers leverage MCP to help AI systems understand complex coding requirements and generate appropriate solutions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-gray-700 text-sm">
                Educational platforms use MCP to create AI tutors that adapt to student needs while providing accurate information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCP;
