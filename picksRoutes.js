// picksRoutes.js

// ... 其他引入 ...
const express = require('express');
const router = express.Router();
const db = require('./dbConfig');

// Get all Picks
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM picks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get single Pick
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM picks WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Pick not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Create a new Pick
router.post('/', async (req, res) => {
  const { wine_id, title, description, reason, image_url } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO picks (wine_id, title, description, reason, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [wine_id, title, description, reason, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update a Pick
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { wine_id, title, description, reason, image_url } = req.body;
  try {
    const result = await db.query(
      'UPDATE picks SET wine_id = $1, title = $2, description = $3, reason = $4, image_url = $5 WHERE id = $6 RETURNING *',
      [wine_id, title, description, reason, image_url, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Pick not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete a Pick
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOp = await db.query('DELETE FROM picks WHERE id = $1', [id]);
    if (deleteOp.rowCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).send('Pick not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
