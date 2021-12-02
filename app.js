let ip = require("ip");
const express = require('express');
const app = express();

app.use(express.json());

const players = [
    {
        id: 1,
        name: 'John Doe',
        score: 0
    },
    {
        id: 2,
        name: 'Jane Doe',
        score: 0
    },
]


app.get('/', (req, res) => {
  res.json(players);
})

app.get('/hostname', (req, res) => {
    res.json(os.hostname());
})

app.get('/localipaddr', (req, res) => {
    res.json(ip.address());
})

app.listen(3001);