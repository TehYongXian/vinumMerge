const express = require('express');
const router = express.Router();
const pool = require('./dbConfig');
const db = require('./dbConfig');


// GET WINE
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM wines');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// CREATE WINE
router.post('/', async (req, res) => {
  const { name, year, region_id, description, picture } = req.body;
  try {
    const insertQuery = 'INSERT INTO wines(name, year, region_id, description, picture) VALUES($1, $2, $3, $4, $5) RETURNING *;';
    const { rows } = await pool.query(insertQuery, [name, year, region_id, description, picture]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// UPDATE WINE
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, year, description, picture, region_id } = req.body;

  try {
    const updateQuery = `
      UPDATE wines
      SET name = $1, year = $2, description = $3, picture = $4, region_id = $5
      WHERE id = $6
      RETURNING *;
    `;
    const { rows } = await db.query(updateQuery, [name, year, description, picture, region_id, id]);

    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send("Wine not found.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// DELETE WINE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteQuery = 'DELETE FROM wines WHERE id = $1 RETURNING *;';

  try {
    const { rows } = await db.query(deleteQuery, [id]);
    if (rows.length > 0) {
      res.status(200).json({ message: "Wine deleted successfully", wine: rows[0] });
    } else {
      res.status(404).json({ message: "Wine not found" });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = router;

