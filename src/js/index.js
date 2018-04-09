import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import styleScss from '../stylesheets/style.scss';


ReactDOM.hydrate(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root'),
);
