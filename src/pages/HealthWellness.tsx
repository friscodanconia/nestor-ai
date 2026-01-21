import React from 'react';
import { Heart } from 'lucide-react';
import CategoryLayout from '../components/CategoryLayout';
import Text from '../components/ui/Text';
import { Card, Grid } from '../components/ui';
import { healthWellnessData, HealthWellnessTopic } from '../data/categories/healthWellness';
import CollapsibleSection from '../components/CollapsibleSection';
import SEO from '../components/SEO';

const formatDescription = (description: string) => {
  return description.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-3 last:mb-0">
      {paragraph}
    </p>
  ));
};

const HealthWellness = () => {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="Health & Wellness"
        description="Discover AI tools that can help you improve your health and wellness."
        keywords="AI health, wellness tools, fitness AI, mental health, nutrition"
      />
      
      <div className="space-y-8">
        {healthWellnessData.map((topic, index) => (
          <CollapsibleSection 
            key={index}
            title={topic.title}
            defaultExpanded={index === 0}
          >
            <div className="space-y-4">
              <div className="prose prose-slate max-w-none">
                {formatDescription(topic.description)}
              </div>
              
              {topic.links && topic.links.length > 0 && (
                <div className="space-y-2">
                  <Text variant="subtitle" className="font-medium">
                    Useful Links:
                  </Text>
                  <ul className="list-disc pl-5 space-y-1">
                    {topic.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {topic.readMoreUrl && (
                <div className="pt-2">
                  <a 
                    href={topic.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              )}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </>
  );

  // Desktop content with Card layout
  const desktopContent = (
    <Grid columns={1} gap="xl">
      {healthWellnessData.map((topic, index) => (
        <Card key={index} variant="outlined">
          <div className="bg-primary-light p-4">
            <Text variant="h3" className="mb-0">{topic.title}</Text>
          </div>
          <div className="p-6 space-y-4">
            <div className="prose prose-slate max-w-none">{formatDescription(topic.description)}</div>
            {topic.links && topic.links.length > 0 && (
              <div className="space-y-2">
                <Text variant="subtitle" className="font-medium">Useful Links:</Text>
                <ul className="list-disc pl-5 space-y-1">
                  {topic.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {topic.readMoreUrl && (
              <div className="pt-2">
                <a href={topic.readMoreUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">Read more →</a>
              </div>
            )}
          </div>
        </Card>
      ))}
    </Grid>
  );

  return (
    <CategoryLayout
      title="Health & Wellness"
      icon={<Heart className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-green-100 to-emerald-200"
      description="Discover AI tools that can help you improve your health and wellness."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default HealthWellness;
