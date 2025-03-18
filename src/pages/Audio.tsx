import { Headphones } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { audioData } from '../data/categories/audio';
import { Text, Card, Grid } from '../components/ui';

export default function Audio() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="AI Audio Tools"
        description="Explore AI-powered audio tools for voice generation, music creation, audio editing, and sound enhancement."
        keywords="AI audio tools, voice generation, AI music, audio enhancement, text-to-speech, speech-to-text"
      />
      
      {audioData.sections.map((section, index) => (
        <CollapsibleSection 
          key={index} 
          title={section.title} 
          defaultExpanded={index === 0}
        >
          <Card variant="outlined" className="space-y-4">
            <Text variant="body" color="secondary">
              {section.description}
            </Text>
            <a 
              href={section.linkUrl}
              className="flex items-center gap-2 hover:text-primary-dark transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-primary-dark transition-colors"></div>
              <Text variant="body" color="secondary" className="hover:text-primary-dark transition-colors">
                {section.linkText}
              </Text>
            </a>
          </Card>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <Grid columns={1} gap="xl">
      {audioData.sections.map((section, index) => (
        <Card key={index} variant="outlined">
          <div className="bg-primary-light p-4">
            <Text variant="h3" className="mb-0">
              {section.title}
            </Text>
          </div>
          <div className="p-6 space-y-4">
            <Text variant="body" color="secondary">
              {section.description}
            </Text>
            <a 
              href={section.linkUrl}
              className="flex items-center gap-2 hover:text-primary-dark transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-primary-dark transition-colors"></div>
              <Text variant="body" color="secondary" className="hover:text-primary-dark transition-colors">
                {section.linkText}
              </Text>
            </a>
          </div>
        </Card>
      ))}
    </Grid>
  );

  return (
    <CategoryLayout
      title={audioData.title}
      icon={<Headphones className="w-5 h-5" />}
      gradientClasses={audioData.gradientClasses}
      description={audioData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      breadcrumbParent="/"
    />
  );
}
