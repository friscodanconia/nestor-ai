import { Clock } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { personalProductivityData } from '../data/categories/personalProductivity';
import { Text, Card, Grid } from '../components/ui';

export default function PersonalProductivity() {
  // Helper function to format description with "read more here" link
  const formatDescription = (description: string, readMoreUrl?: string) => {
    if (!readMoreUrl) return description;
    
    // Check if the description contains the exact phrase
    const readMoreText = "For a detailed strategy, read more here.";
    if (!description.includes(readMoreText)) return description;
    
    // Replace the text with the link
    const parts = description.split(readMoreText);
    
    return (
      <>
        {parts[0]}
        For a detailed strategy, <a 
          href={readMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary hover:text-primary-dark transition-colors"
        >
          read more here
        </a>.
        {parts.length > 1 ? parts[1] : ''}
      </>
    );
  };

  // Mobile content with collapsible sections
  const mobileContent = (
    <>
      <SEO 
        title="Personal Productivity & Organization"
        description="Explore AI tools for personal productivity and organization, including calendar management, note-taking, and task automation."
        keywords="AI productivity tools, personal organization, Motion, Notion AI, Otter.ai, task automation"
      />
      
      {personalProductivityData.topics.map((topic, index) => (
        <CollapsibleSection 
          key={index} 
          title={topic.title} 
          defaultExpanded={index === 0}
        >
          <Card variant="outlined" className="space-y-4">
            <Text className="text-gray-700">
              {formatDescription(topic.description, topic.readMoreUrl)}
            </Text>
            
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
          </Card>
        </CollapsibleSection>
      ))}
    </>
  );

  // Desktop content with all sections expanded
  const desktopContent = (
    <>
      <SEO 
        title="Personal Productivity & Organization"
        description="Explore AI tools for personal productivity and organization, including calendar management, note-taking, and task automation."
        keywords="AI productivity tools, personal organization, Motion, Notion AI, Otter.ai, task automation"
      />
      
      <Grid container spacing={4}>
        {personalProductivityData.topics.map((topic, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined" className="space-y-4">
              <Text variant="h3" className="font-bold">
                {topic.title}
              </Text>
              
              <Text className="text-gray-700">
                {formatDescription(topic.description, topic.readMoreUrl)}
              </Text>
              
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <CategoryLayout
      title={personalProductivityData.title}
      description={personalProductivityData.description}
      icon={<Clock size={24} />}
      gradientClasses={personalProductivityData.gradientClasses}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
