#!/bin/bash

# List of topics
topics=(
  "ai-aso-strategy:ASO Strategy:Optimize your app store presence with AI-powered App Store Optimization strategies."
  "ai-product-imagery:Product Imagery:Transform your product photography with AI-generated imagery and visual content."
  "ai-campaign-building:Campaign Building:Build more effective marketing campaigns with AI-powered planning and optimization."
  "ai-ad-copy:Ad Copy:Create high-converting ad copy at scale using AI copywriting tools and techniques."
  "ai-content-creation:Content Creation:Streamline your content creation process with AI writing assistants and tools."
  "ai-social-media:Social Media:Enhance your social media strategy with AI-powered content, scheduling, and analytics."
)

# Template file
template="/Users/Soumyo/nestor-ai-main/public/blog/template.html"

# Generate placeholder pages for each topic
for topic in "${topics[@]}"; do
  # Split the topic string by colon
  IFS=':' read -r filename title description <<< "$topic"
  
  # Create strategies content
  strategies=""
  for i in {1..5}; do
    strategies+="<li><strong>Strategy $i:</strong> Placeholder for a detailed strategy related to $title.</li>"
  done
  
  # Create tools content
  tools=""
  for i in {1..4}; do
    tools+="<div class=\"border rounded-lg p-4 hover:shadow-md transition-shadow\">
            <h3 class=\"font-bold text-lg mb-2\">Tool $i for $title</h3>
            <p class=\"text-gray-600\">Description of how this tool helps with $title.</p>
        </div>"
  done
  
  # Create the output file
  output="/Users/Soumyo/nestor-ai-main/public/blog/$filename.html"
  
  # Replace placeholders in the template
  sed -e "s/{{TITLE}}/$title/g" \
      -e "s/{{DESCRIPTION}}/$description/g" \
      -e "s/{{OVERVIEW}}/This is a placeholder overview for $title. We'll be adding detailed content about how AI can transform this aspect of marketing soon./g" \
      -e "s|{{STRATEGIES}}|$strategies|g" \
      -e "s|{{TOOLS}}|$tools|g" \
      "$template" > "$output"
  
  echo "Created $output"
done

echo "All placeholder pages generated successfully!"
