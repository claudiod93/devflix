const express = require('express');

const app = express();
const config = require('./config')

app.use('/hello', (req, res) => {
    res.send('hola');
})

app.listen(config.port, () => 
    {
        console.log(`API Server Listening on http://localhost:${config.port}`);
    });