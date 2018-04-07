import express from 'express';
import api from '../api/api';
import logger from './util/logger';

const app = express();
require('./middleware/middleware.js')(app);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: `<p>This is EJS doing its thang: ${Math.random()}</p>`,
  });
});

app.use(express.static('public'));

app.use('/api', api);

app.use((err, req, res) => {
  console.log('An error has occured');
  logger.log(err.message);
  res.status(500).json(err);
});

module.exports = app;
