const handleSignal = (signal) => {
  console.log(`Caught signal ${signal}, shutting down...`);
  process.exit();
};
process.stdin.resume();
process.on('SIGINT', handleSignal);
process.on('SIGTERM', handleSignal);

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`loggerserver started on port ${port}`);
});
