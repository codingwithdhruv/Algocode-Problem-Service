const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/server.config');
const apiRouter = require('../src/routes');
const errorHandler = require('./utils/errorHandler');
const connectToDb = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message: 'Problem service is alive'});
})

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`)
    await connectToDb();
    console.log("Successfully connected to db");
})
