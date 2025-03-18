import { UserRound } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { aiInMarketingData } from '../data/categories/aiInMarketing';
import { Text, Card, Grid } from '../components/ui';

export default function AIInMarketing() {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="AI in Marketing"
        description="Learn how AI is transforming marketing strategies, content creation, customer insights, and campaign optimization."
        keywords="AI marketing, marketing automation, AI content creation, customer insights, marketing analytics"
      />
      
      {aiInMarketingData.topics.map((topic, index) => (
        <CollapsibleSection 
          key={index} 
          title={topic.title} 
          defaultExpanded={index === 0}
        >
          <Card variant="outlined" className="space-y-4">
            <Text variant="body" color="secondary">
              {topic.description}
              {topic.links && topic.links.map((link, linkIndex) => (
                <span key={linkIndex}>
                  {linkIndex === 0 ? ' ' : ' '}
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-primary-dark"
                  >
                    {link.name}
                  </a>
                  {linkIndex < (topic.links?.length || 0) - 1 ? ' and ' : ''}
                </span>
              ))}
            </Text>
          </Card>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content
  const desktopContent = (
    <Grid columns={1} gap="xl">
      {aiInMarketingData.topics.map((topic, index) => (
        <Card key={index} variant="outlined">
          <div className="bg-primary-light p-4">
            <Text variant="h3" className="mb-0">
              {topic.title}
            </Text>
          </div>
          <div className="p-6 space-y-4">
            <Text variant="body" color="secondary">
              {topic.description}
              {topic.links && topic.links.map((link, linkIndex) => (
                <span key={linkIndex}>
                  {linkIndex === 0 ? ' ' : ' '}
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold underline hover:text-primary-dark"
                  >
                    {link.name}
                  </a>
                  {linkIndex < (topic.links?.length || 0) - 1 ? ' and ' : ''}
                </span>
              ))}
            </Text>
          </div>
        </Card>
      ))}
    </Grid>
  );

  return (
    <CategoryLayout
      title={aiInMarketingData.title}
      icon={<UserRound className="w-5 h-5" />}
      gradientClasses={aiInMarketingData.gradientClasses}
      description={aiInMarketingData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
