import express from 'express';
import logger from './util/logger';
import serverRender from './js/serverRender';

const api = require('../api/api');

const app = express();
require('./middleware/middleware.js')(app);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  serverRender()
    .then(({ initialData, initialMarkup }) => {
      res.render('index', {
        initialMarkup,
        initialData,
      });
    })
    .catch((err) => {
      logger.log(err);
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
