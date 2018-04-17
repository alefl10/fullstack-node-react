import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import config from '../config/config';
import App from '../components/App';

const apiUrl = (contestId) => {
  if (contestId !== undefined) {
    return `${config.serverUrl}/api/contestData/${contestId}`;
  }
  return `${config.serverUrl}/api/contestData`;
};

const getInitialData = (contestId, apiData) => {
  if (contestId !== undefined) {
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData,
      },
    };
  }
  return apiData;
};

const serverRender = contestId =>
  axios.get(apiUrl(contestId))
    .then((resp) => {
      const initialData = getInitialData(contestId, resp.data);
      const data = {
        initialData,
        initialMarkup: renderToString(<App initialData={initialData} />),
      };
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

export default serverRender;
