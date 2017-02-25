import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import AuthFormContainer from './authform/auth_form_container';


const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser === null) {
      replace('/login');
    }
  };

const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={_ensureLoggedIn}/>
      <Route path="/signup" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
      <Route path="/login" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>

    </Router>
  </Provider>
)

export default Root;
