import express from 'express';
const routes = require('./routes/index');

const app = express();
const PORT = 1245;

app.use('/', routes);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;