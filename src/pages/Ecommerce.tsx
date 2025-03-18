import { ShoppingCart } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { ecommerceData } from '../data/categories/ecommerce';
import { Text, Card, Grid } from '../components/ui';

export default function Ecommerce() {
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
        title="E-commerce & Shopping"
        description="Discover AI tools for e-commerce and online shopping, including product discovery, personalization, and visual search technology."
        keywords="AI e-commerce, online shopping, Vue.ai, Shopify AI, Fashwell, visual search, personalized shopping"
      />
      
      {ecommerceData.topics.map((topic, index) => (
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
        title="E-commerce & Shopping"
        description="Discover AI tools for e-commerce and online shopping, including product discovery, personalization, and visual search technology."
        keywords="AI e-commerce, online shopping, Vue.ai, Shopify AI, Fashwell, visual search, personalized shopping"
      />
      
      <Grid container spacing={4}>
        {ecommerceData.topics.map((topic, index) => (
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
      title={ecommerceData.title}
      description={ecommerceData.description}
      icon={<ShoppingCart size={24} />}
      gradientClasses={ecommerceData.gradientClasses}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
}
