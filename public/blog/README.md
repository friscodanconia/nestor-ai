# Nestor Guide Blog Placeholders

This directory contains placeholder blog pages for the Nestor Guide website. These placeholder pages are used as destinations for the "read more here" links in the AI in Marketing section of the main application.

## Structure

- `index.html` - Main blog index page showing all available articles
- Individual article pages (e.g., `ai-business-ranking.html`, `ai-competitor-research.html`, etc.)
- `template.html` - Template used to generate placeholder pages
- `generate-placeholders.sh` - Script to generate placeholder pages from the template

## How to Use

1. The placeholder pages are served using a simple Express server
2. Run the server using: `npm run serve-blog`
3. Access the blog index at: http://localhost:3000/blog
4. Individual articles are available at: http://localhost:3000/blog/[article-name]

## Replacing with Real Content

When you're ready to replace these placeholders with real content:

1. Create the actual blog content on the nestor.guide domain
2. Ensure the URLs match the ones used in the application:
   - https://nestor.guide/blog/ai-business-ranking
   - https://nestor.guide/blog/ai-competitor-research
   - https://nestor.guide/blog/ai-aso-strategy
   - https://nestor.guide/blog/ai-product-imagery
   - https://nestor.guide/blog/ai-campaign-building
   - https://nestor.guide/blog/ai-ad-copy
   - https://nestor.guide/blog/ai-content-creation
   - https://nestor.guide/blog/ai-social-media

## Development

To modify the placeholder pages:

1. Edit the `template.html` file to change the overall structure
2. Edit individual HTML files for specific content changes
3. Run the `generate-placeholders.sh` script to regenerate all placeholder pages
