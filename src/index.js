import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from 'react-ga';
const root = ReactDOM.createRoot(document.getElementById('root'));

const TRACKING_ID = "G-Y4FNM9Z53E";
ReactGA.initialize(TRACKING_ID);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

