// server.js
import express from 'express';
import fetch from 'node-fetch'; // No need to access .default since it's an ES module
import cors from 'cors';

const app = express();
const port = 3000;

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'b551b472a9b04eca91e38405b2427ff6';

app.use(cors());

// Fetch recipes for a specific food
app.get('/api/recipes/:foodName', async (req, res) => {
  const { foodName } = req.params;
  try {
    const response = await fetch(`${URL}?query=${foodName}&apiKey=${API_KEY}`);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
