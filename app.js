// const express = require('express');

// const app = express();
// const clientView = require('./render.js');

// app.use('/assets', express.static('assets'));
// app.listen(3000, () => console.log('Services start :>'));

// app.get('/*', (req, res, next) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.send(clientView.html());
// })

// index.js




const express = require('express');

const app = express();
const clientView = require('./render.js');

app.use('/assets', express.static('assets'));
app.listen(3000, () => console.log('Services start :>'));

app.get('/*', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(clientView.html());
});
module.exports = app

// // index.js
// const express = require('express')

// const app = express()
// const PORT = 4000

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })

// app.get('/', (req, res) => {
//   res.send(clientView.html())
// })

// app.get('/about', (req, res) => {
//   res.send('This is my about route..... ')
// })

// // Export the Express API
// module.exports = app