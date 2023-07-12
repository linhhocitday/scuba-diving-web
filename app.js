const express = require('express');

const app = express();
const clientView = require('./render.js');

app.use('/assets', express.static('assets'));
app.listen(3000, () => console.log('Services start :>'));

app.get('/*', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(clientView.html());
})

index.js

