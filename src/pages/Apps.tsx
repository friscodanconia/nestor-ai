import { AppWindow } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { appsData } from '../data/categories/apps';
import { Text, Card, Grid } from '../components/ui';

export default function Apps() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="AI Apps"
        description="Explore AI-powered applications that can enhance your creativity, productivity, and daily workflows."
        keywords="AI apps, artificial intelligence applications, creative AI tools, productivity AI, AI software"
      />
      
      <CollapsibleSection title="What to expect" defaultExpanded={true}>
        <Card variant="outlined" className="space-y-4">
          <ul className="list-disc list-inside space-y-1">
            {appsData.whatToExpect.items.map((item, index) => (
              <li key={index}>
                <Text variant="body" color="secondary">{item}</Text>
              </li>
            ))}
          </ul>
        </Card>
      </CollapsibleSection>

      {appsData.sections.map((section, index) => (
        <CollapsibleSection key={index} title={section.title}>
          <Card variant="outlined" className="space-y-4">
            {section.apps.map((app, appIndex) => (
              <Text key={appIndex} variant="body" color="secondary">
                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline hover:text-primary-dark"
                >
                  {app.name}
                </a>
                {app.name !== section.title && " - "}{app.description}
              </Text>
            ))}
          </Card>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <Grid columns={1} gap="xl">
      <Card variant="outlined">
        <div className="bg-primary-light p-4">
          <Text variant="h3" className="mb-0">
            What to expect
          </Text>
        </div>
        <div className="p-6 space-y-4">
          <ul className="list-disc list-inside space-y-1">
            {appsData.whatToExpect.items.map((item, index) => (
              <li key={index}>
                <Text variant="body" color="secondary">{item}</Text>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {appsData.sections.map((section, index) => (
        <Card key={index} variant="outlined">
          <div className="bg-primary-light p-4">
            <Text variant="h3" className="mb-0">
              {section.title}
            </Text>
          </div>
          <div className="p-6 space-y-4">
            {section.apps.map((app, appIndex) => (
              <Text key={appIndex} variant="body" color="secondary">
                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline hover:text-primary-dark"
                >
                  {app.name}
                </a>
                {app.name !== section.title && " - "}{app.description}
              </Text>
            ))}
          </div>
        </Card>
      ))}
    </Grid>
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
          <Card variant="outlined" className="mt-6">
            <Text variant="body" color="secondary">Last updated: {appsData.lastUpdated}</Text>
            <Text variant="body" color="secondary">
              Have a suggestion? <a href={`mailto:${appsData.contactEmail}`} className="hover:text-primary-dark">mail us {appsData.contactEmail}</a>
            </Text>
          </Card>
        </>
      }
      desktopContent={
        <>
          <Card variant="outlined" className="mb-6">
            <div className="p-4">
              <Text variant="body" color="secondary">Last updated: {appsData.lastUpdated}</Text>
              <Text variant="body" color="secondary">
                Have a suggestion? <a href={`mailto:${appsData.contactEmail}`} className="hover:text-primary-dark">mail us {appsData.contactEmail}</a>
              </Text>
            </div>
          </Card>
          {desktopContent}
        </>
      }
    />
  );
}
