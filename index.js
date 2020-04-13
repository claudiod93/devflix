const express = require('express');

const app = express();
const config = require('./config');
const videosApi= require('./routes/videos');

app.use(express.json());

videosApi(app);

app.listen(config.port, () => 
    {
        console.log(`API Server Listening on http://localhost:${config.port}`);
    });