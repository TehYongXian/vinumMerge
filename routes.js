const express = require('express');
const router = express.Router();
const pool = require('./dbConfig');

router.get('/wines', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM wines');
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/picks', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM picks');
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// ... OTHER ROUTES ...

module.exports = router;