const express = require('express');
const cors = require('cors');
const pool = require('./dbConfig');
const routes = require('./routes'); 

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
