const express = require('express');
const api = require('./routes/api')

require('dotenv').config();

const app = express();
app.use(express.json())

app.use('/api', api)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
