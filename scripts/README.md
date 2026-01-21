# Nestor AI Content Scripts

## Automated Content Refresh

### How it works

1. **Weekly scraper** runs every Monday at 9 AM UTC via GitHub Actions
2. Fetches trending AI tools from:
   - GitHub (trending AI/ML repos)
   - More sources can be added
3. Compares against current tools in `src/data/categories/`
4. Generates a report of new tools to review
5. Creates a Pull Request with the report

### Manual Run

```bash
# Run the scraper locally
node scripts/scrape-ai-tools.js

# Check the report
cat reports/latest.md
```

### Adding More Sources

Edit `scripts/scrape-ai-tools.js` to add new data sources:

```javascript
// Add a new fetch function
async function fetchProductHunt() {
  // Implement scraping logic
}

// Call it in main()
const phTools = await fetchProductHunt();
allTools.push(...phTools);
```

### Workflow

The GitHub Action workflow (`.github/workflows/content-refresh.yml`) can be:

- **Triggered manually**: Go to Actions → Weekly Content Refresh → Run workflow
- **Runs automatically**: Every Monday at 9 AM UTC

### Reports

Reports are saved to `reports/` directory:
- `latest.md` - Most recent report
- `tools-update-YYYY-MM-DD.md` - Historical reports
