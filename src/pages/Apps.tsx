import { AppWindow } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import { appsData } from '../data/categories/apps';

export default function Apps() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <CollapsibleSection title="What to expect" defaultExpanded={true}>
        <div className="space-y-4">
          <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
            {appsData.whatToExpect.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </CollapsibleSection>

      {appsData.sections.map((section, index) => (
        <CollapsibleSection key={index} title={section.title}>
          <div className="space-y-4">
            {section.apps.map((app, appIndex) => (
              <p key={appIndex} className="text-base text-gray-700">
                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline hover:text-rose-800"
                >
                  {app.name}
                </a>
                {app.name !== section.title && " - "}{app.description}
              </p>
            ))}
          </div>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          What to expect
        </h3>
        <div className="space-y-4">
          <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
            {appsData.whatToExpect.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {appsData.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-4">
            {section.title}
          </h3>
          <div className="space-y-4">
            {section.apps.map((app, appIndex) => (
              <p key={appIndex} className="text-base text-gray-700">
                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline hover:text-rose-800"
                >
                  {app.name}
                </a>
                {app.name !== section.title && " - "}{app.description}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <CategoryLayout
      title={appsData.title}
      icon={<AppWindow className="w-5 h-5" />}
      gradientClasses={appsData.gradientClasses}
      description={appsData.description}
      mobileContent={
        <>
          {mobileContent}
          <div className="mt-6 text-base text-gray-700">
            <p>Last updated: {appsData.lastUpdated}</p>
            <p>Have a suggestion? <a href={`mailto:${appsData.contactEmail}`} className="hover:text-rose-800">mail us {appsData.contactEmail}</a></p>
          </div>
        </>
      }
      desktopContent={
        <>
          <div className="mb-6 text-base text-gray-700">
            <p>Last updated: {appsData.lastUpdated}</p>
            <p>Have a suggestion? <a href={`mailto:${appsData.contactEmail}`} className="hover:text-rose-800">mail us {appsData.contactEmail}</a></p>
          </div>
          {desktopContent}
        </>
      }
    />
  );
}
