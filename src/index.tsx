import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function onUpdateHandler(registration: ServiceWorkerRegistration) {
  // Make sure that any new version of a service worker will take over the page
  // and become activated immediately.
  window.location.reload();
}

serviceWorker.register({ onUpdate: onUpdateHandler });
