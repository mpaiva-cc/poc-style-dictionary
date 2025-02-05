import express from 'express';
import path from 'path';
import { exec } from 'child_process';
import fs from 'fs';
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.static('public'));

// Serve the tokens
app.get('/api/tokens/:brand', async (req, res) => {
  try {
    const brand = req.params.brand;
    const tokensPath = path.join(__dirname, `build/web/${brand}/tokens.json`);
    const tokens = await fs.promises.readFile(tokensPath, 'utf8');
    res.json(JSON.parse(tokens));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save tokens and trigger build
app.post('/api/tokens/:brand', async (req, res) => {
  try {
    const brand = req.params.brand;
    const tokens = req.body;
    
    // Save to tokens/brands/{brand}/tokens.json
    const brandTokensPath = path.join(__dirname, `tokens/brands/${brand}/tokens.json`);
    await fs.promises.writeFile(brandTokensPath, JSON.stringify(tokens, null, 2));
    
    // Trigger build
    exec('node build.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Build error: ${error}`);
        return res.status(500).json({ error: error.message });
      }
      res.json({ message: 'Tokens updated and build completed', output: stdout });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Token editor app listening at http://localhost:${port}`);
}); 