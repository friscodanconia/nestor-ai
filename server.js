import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Redirect /blog to /blog/index.html
app.get('/blog', (req, res) => {
  res.redirect('/blog/index.html');
});

// Handle requests to /blog/[article-name]
app.get('/blog/:articleName', (req, res) => {
  const articleName = req.params.articleName;
  res.sendFile(path.join(__dirname, 'public', 'blog', `${articleName}.html`));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
