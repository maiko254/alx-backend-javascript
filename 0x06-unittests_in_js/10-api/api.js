const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the payment system');
    res.end();
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(`Payment methods for cart ${req.params.id}`);
    res.end();
});

app.get('/available_payments', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(
        JSON.stringify({
            payment_methods: {
                credit_card: true,
                paypal: false
            }
        })
    );
    res.end();
});

app.post('/login', (req, res) => {
    res.statusCode = 200;
    res.send(`Welcome ${req.body.userName}`);
    res.end();
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;