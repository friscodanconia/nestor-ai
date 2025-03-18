import { Video as VideoIcon } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { videoData } from '../data/categories/video';
import { Text, Card, Grid } from '../components/ui';

export default function Video() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="AI Video Tools"
        description="Discover AI-powered video creation, editing, and enhancement tools that can transform your video content."
        keywords="AI video tools, video generation, video editing, AI video enhancement, video creation"
      />
      
      {videoData.sections.map((section, index) => (
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
      {videoData.sections.map((section, index) => (
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
      title={videoData.title}
      icon={<VideoIcon className="w-5 h-5" />}
      gradientClasses={videoData.gradientClasses}
      description={videoData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
