const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();
const main = require('./routes/main');
const app = express();
const port = process.env.PORT;

// Accept only json requests
app.use(express.json({ type: 'application/json' }));

// Parse application/json
app.use(bodyParser.json());

// Use helmet to secure app using HTTP headers
app.use(helmet());

// Load main route
app.use('/subscribe', main);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
});
