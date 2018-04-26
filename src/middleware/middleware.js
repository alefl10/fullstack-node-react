import path from 'path';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(favicon(path.join(__dirname, '../../dist', 'favicon.ico')));
};
