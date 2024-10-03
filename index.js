const express = require('express');
const cors = require('cors');
const app = express();
const resumeData = require('./resumeData');

app.use(cors());

app.get('/', (req, res) => {
  res.json(resumeData);
});

// Use a dynamic port
const port = process.env.PORT || 0; 

const server = app.listen(port, () => {
  const actualPort = server.address().port;
  console.log(`Server running on http://localhost:${actualPort}`);
});
