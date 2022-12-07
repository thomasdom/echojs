const express = require('express');
const app = express();

const port = Number(process.env.PORT) || 80;

app.get('/', function(req, res) {
  res.send('Hello Thomas');
});

const server = app.listen(port, () => {
  console.log(`Application started on http://localhost:${port}`);
});

const exitOnSignal = (signal) => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.info(`Terminating with signal ${signal}`);
    process.exit(0);
  })
};

process.on('SIGINT', exitOnSignal);
process.on('SIGTERM', exitOnSignal);
