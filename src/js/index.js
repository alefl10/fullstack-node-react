import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import styleScss from '../stylesheets/main.scss';

ReactDOM.hydrate(
  <App initialData={window.initialData} />,
  document.getElementById('root'),
);
