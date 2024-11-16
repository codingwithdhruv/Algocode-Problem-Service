const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('../src/config/server.config');
const apiRouter = require('../src/routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message: 'Problem service is alive'});
})

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`)
});
