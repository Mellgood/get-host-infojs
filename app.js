let ip = require("ip");
const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api/v1/env/hostname', (req, res) => {
    res.json(os.hostname());
})

app.get('/api/v1/env/localipaddr', (req, res) => {
    res.json(ip.address());
})

app.listen(3001);