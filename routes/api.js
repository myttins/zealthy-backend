const express = require('express');
const router = express.Router();

const db = require('../models/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const query = await db.query(`
  SELECT * from tickets 
  WHERE id = ${id}
  `);

  res.status(200).json(query.rows);
});

router.get('/', async (req, res) => {
  const query = await db.query(`SELECT * FROM tickets ORDER BY time DESC`);
  res.status(200).json(query.rows);
});

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const date = new Date();

  await db.query(`
    INSERT INTO tickets (name, email, subject, message, timestamp, time)
    VALUES ('${name}', '${email}', '${subject}', '${message}', '${date.toLocaleString()}', ${
    date.valueOf() - 1695000000000
  })`);

  res.sendStatus(200);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { status, response } = req.body;
  const date = new Date();

  await db.query(`
  UPDATE tickets
  SET status = '${status}', response = '${response}', timestamp = '${date.toLocaleString()}', time = ${
    date.valueOf() - 1695000000000
  }
  WHERE id = ${id}`);

  res.sendStatus(200);
});

module.exports = router;
