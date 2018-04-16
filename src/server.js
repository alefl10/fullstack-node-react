import express from 'express';
import serverRender from './js/serverRender';
import config from './config/config';

require('mongoose').connect(`${config.db.url}/${config.db.name}`);

console.log('Connected to mongoDB.');

const contest = require('../api/contest/contestRouter');
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
      console.log(err);
    });
});

app.use('/contest', contest);
app.use('/api', api);

app.use(express.static('dist'));

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
