const { createServer } = require('node:http');

const host = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello Holberton School!');
});

app.listen(port, host, () => {});

module.exports = app;