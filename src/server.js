import express from 'express';
import logger from './util/logger';

const api = require('../api/api');

const app = express();
require('./middleware/middleware.js')(app);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: '...',
  });
});

app.use('/api', api);

app.use(express.static('dist'));

app.use((err, req, res) => {
  console.log('An error has occured');
  logger.log(err.message);
  res.status(500).json(err);
});

module.exports = app;
