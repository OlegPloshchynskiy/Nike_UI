const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/nike-stores', async (req, res) => {
  const { location, radius, keyword, key } = req.query;

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        location,
        radius,
        keyword,
        key
      }
    }); 

    res.json(response.data);
  } catch (error) { 
    console.log('Error fetching Nike stores:', error); 
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  
});
