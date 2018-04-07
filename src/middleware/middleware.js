import morgan from 'morgan';
import bodyParser from 'body-parser';

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
};
