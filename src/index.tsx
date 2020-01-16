import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ServiceWorkerUpdatePrompt } from './ServiceWorkerUpdatePrompt';
import './IonicConfig';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register({
  onUpdate: registration => {
    if (registration.waiting) {
      ReactDOM.render(
        <ServiceWorkerUpdatePrompt registration={registration} />,
        document.querySelector('.sw-update-modal')
      );
    }
  },
});
