const { createServer } = require('node:http');

const host = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.end();
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;