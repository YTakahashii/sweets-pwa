import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function onUpdateHandler(registration: ServiceWorkerRegistration) {
  caches.keys().then(keys => {
    console.log('keys: ' + keys);
    return Promise.all(
      keys.map(key => {
        console.log('不要なキャッシュを削除');
        return caches.delete(key);
      })
    );
  });
  registration.update();
  window.location.reload();
}

serviceWorker.register({ onUpdate: onUpdateHandler });
