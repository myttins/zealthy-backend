const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('zealthy backend')
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
