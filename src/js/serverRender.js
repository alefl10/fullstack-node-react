import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import config from '../config/config';
import App from '../components/App';
import logger from '../util/logger';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then((resp) => {
      const data = {
        initialData: resp.data,
        initialMarkup: renderToString(<App initialData={resp.data} />),
      };
      return data;
    })
    .catch((err) => {
      logger.log(err);
    });

export default serverRender;
