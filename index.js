const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const api = require('./routes/api');

app.use('/api', api);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
