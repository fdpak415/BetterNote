import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchTag} from './actions/tag_actions';

import {login, signup} from './actions/session_actions';
import {createNotebook, fetchNotebooks, fetchNotebook, updateNotebook, destroyNotebook} from './actions/notebook_actions';
window.fetchTag = fetchTag;
window.login = login
window.createNotebook = createNotebook;
window.fetchNotebook = fetchNotebook;
window.fetchNotebooks = fetchNotebooks;
window.updateNotebook = updateNotebook;
window.destroyNotebook = destroyNotebook;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  const root = document.getElementById('root');
  const state = store.getState();
  ReactDOM.render(<Root store={store}/>, root);
})
