import React from 'react';
import { Image } from 'lucide-react';
import CategoryLayout from '../components/CategoryLayout';
import Text from '../components/ui/Text';
import { Card, Grid } from '../components/ui';
import { imageDesignData, ImageDesignTopic } from '../data/categories/imageDesign';
import CollapsibleSection from '../components/CollapsibleSection';
import SEO from '../components/SEO';

const formatDescription = (description: string) => {
  return description.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-3 last:mb-0">
      {paragraph}
    </p>
  ));
};

const ImageDesign = () => {
  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="Image Design"
        description="Discover AI tools that can help you create stunning visuals and designs."
        keywords="AI image design, image generation, AI art, design tools, visual creation"
      />
      
      <div className="space-y-8">
        {imageDesignData.map((topic, index) => (
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
      {imageDesignData.map((topic, index) => (
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
      title="Image Design"
      icon={<Image className="w-6 h-6" />}
      gradientClasses="bg-gradient-to-br from-purple-100 to-indigo-200"
      description="Discover AI tools that can help you create stunning visuals and designs."
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default ImageDesign;
