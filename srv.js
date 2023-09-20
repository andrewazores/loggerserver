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

const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

const querystring = require('node:querystring');

app.use('*', (req, _, next) => {
  let str = `${req.method} ${req.path}`;
  if (Object.keys(req.query).length) {
    str += '?' + querystring.stringify(req.query);
  }
  str += '\n\t' + Object.entries(req.headers).map(v => `${v[0]}: ${v.slice(1)}`).join('\n\t');
  logger.info(str);
  next();
});

app.get('*', (_, res) => {
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`loggerserver started on port ${port}`);
});
