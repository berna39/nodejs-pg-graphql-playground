const express = require('express');
const app = express();
const dotenv = require('dotenv');
const service = require('./database/db');

dotenv.config();
app.use(express.json());

const port = process.env.APP_PORT;

app.get('/countries', async (_, res) => {
    res.send(await service.findAllCountries());
});

app.listen(port, (err) => {
    if(!err) console.log(`Server up and running`);
    else console.error(err);
});