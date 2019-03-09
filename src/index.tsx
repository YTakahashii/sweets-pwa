import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

window.addEventListener('touchmove', event => {
  event.preventDefault();
});

/*
var textarea = document.getElementById('textarea');
textarea.scrollTop = 1;

window.addEventListener('touchmove', function(event) {
  if (event.target === textarea && textarea.scrollTop !== 0 && textarea.scrollTop + textarea.clientHeight !== textarea.scrollHeight) {
    event.stopPropagation();
  }
  else {
    event.preventDefault();
  }
});

textarea.addEventListener('scroll', function(event) {
  if (textarea.scrollTop === 0) {
    textarea.scrollTop = 1;
  }
  else if (textarea.scrollTop + textarea.clientHeight === textarea.scrollHeight) {
    textarea.scrollTop = textarea.scrollTop - 1;
  }
});
*/
registerServiceWorker();
