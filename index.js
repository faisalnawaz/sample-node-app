const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Testing App 54'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
