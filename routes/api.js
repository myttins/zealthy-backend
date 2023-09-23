const express = require('express');
const router = express.Router();

const db = require('../models/models');

router.get('/:id', (req, res) => {
  res.status(200).json('getting id...');
});

router.get('/', async (req, res) => {
  const query = await db.query(`SELECT * FROM tickets`);
  res.status(200).json(query.rows);
});

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const timestamp = new Date().toLocaleString();

  await db.query(`
    INSERT INTO tickets (name, email, subject, message, timestamp)
    VALUES ('${name}', '${email}', '${subject}', '${message}', '${timestamp}')`);

  res.status(200).json('post');
});

router.patch('/', (req, res) => {
  res.status(200).json('patch');
});

module.exports = router;
