import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function onUpdateHandler(registration: ServiceWorkerRegistration) {
  // Make sure that any new version of a service worker will take over the page
  // and become activated immediately.
  const waitingServiceWorker = registration.waiting;
  if (waitingServiceWorker) {
    waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
  }

  const link = document.createElement('a');
  link.classList.add('update-notification');
  link.setAttribute('href', '#');
  link.innerHTML = 'アップデートが利用可能です。🎉 クリックしてインストール。';

  link.addEventListener('click', e => {
    e.preventDefault();
    window.location.reload();
  });

  document.querySelector('body')!.appendChild(link);
}

serviceWorker.register({ onUpdate: onUpdateHandler });
