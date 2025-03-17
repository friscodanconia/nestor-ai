import React from 'react';
import { Wrench } from 'lucide-react';
import SubPageLayout from '../../components/SubPageLayout';

export default function WorkflowAutomation() {
  return (
    <SubPageLayout
      title="Workflow Automation"
      description="Workflow automation tools help businesses and individuals streamline their processes by connecting different applications and automating repetitive tasks. These platforms enable you to create powerful automated workflows without coding knowledge."
      icon={<Wrench className="w-5 h-5" />}
      gradient="bg-gradient-to-br from-blue-200 to-purple-200"
      backLink="/quick-answers"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Understanding Workflow Automation</h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            Workflow automation tools connect your favorite apps and services, allowing them to work together seamlessly. By automating repetitive tasks, these tools save time, reduce errors, and increase productivity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="text-base sm:text-lg leading-relaxed">Time savings through task automation</li>
            <li className="text-base sm:text-lg leading-relaxed">Reduced manual errors</li>
            <li className="text-base sm:text-lg leading-relaxed">Improved team productivity</li>
            <li className="text-base sm:text-lg leading-relaxed">Better data consistency</li>
            <li className="text-base sm:text-lg leading-relaxed">Scalable processes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Popular Platforms</h3>
          <div className="space-y-3">
            <div>
              <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Zapier</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Connect apps and automate workflows with easy-to-use interfaces.</p>
            </div>
            <div>
              <a href="https://automate.io" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800">Automate.io</a>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Create business workflows with cloud-based automation.</p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}