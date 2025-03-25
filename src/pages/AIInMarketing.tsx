import React from 'react';
import { UserRound } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { Text, Card, Grid } from '../components/ui';

// Data for the AI in Marketing page
const aiInMarketingData = {
  title: "AI in Marketing",
  gradientClasses: "bg-gradient-to-br from-pink-200 to-purple-200",
  description: "Discover how AI is transforming marketing strategies, content creation, and customer engagement.",
  
  sections: [
    {
      title: "Content Creation & Optimization",
      description: "AI tools are revolutionizing how marketers create and optimize content for campaigns, blogs, social media, and more. These tools can generate ideas, write copy, and suggest improvements based on performance data.",
      links: [
        { name: "Learn about AI content creation", url: "https://www.hubspot.com/artificial-intelligence/ai-content-creation" },
        { name: "Explore AI content optimization", url: "https://www.semrush.com/blog/ai-content-optimization/" }
      ]
    },
    {
      title: "Personalization & Customer Experience",
      description: "AI enables hyper-personalized marketing by analyzing customer data to deliver tailored messages, product recommendations, and experiences at scale. This level of personalization was previously impossible without significant manual effort."
    },
    // Additional sections omitted for brevity
  ]
};

export default function AIInMarketing() {
  // Format description text 
  const formatDescription = (description: string) => {
    return description;
  };

  // Mobile content with collapsible sections
  const mobileContent = (
    <div className="space-y-4 p-4">
      <SEO 
        title="AI in Marketing"
        description="Learn how AI is transforming marketing strategies, content creation, customer insights, and campaign optimization."
        keywords="AI marketing, marketing automation, AI content creation, customer insights, marketing analytics"
      />
      {aiInMarketingData.sections.map((topic, index) => (
        <CollapsibleSection
          key={index}
          title={topic.title}
          defaultExpanded={index === 0}
        >
          <Card variant="outlined" className="space-y-4">
            <Text variant="body" color="secondary">
              {formatDescription(topic.description)}
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
    </div>
  );

  // Desktop content with grid layout
  const desktopContent = (
    <Grid columns={1} gap="xl">
      {aiInMarketingData.sections.map((topic, index) => (
        <Card key={index} variant="outlined">
          <div className="bg-primary-light p-4">
            <Text variant="h3" className="mb-0">
              {topic.title}
            </Text>
          </div>
          <div className="p-6 space-y-4">
            <Text variant="body" color="secondary">
              {formatDescription(topic.description)}
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
