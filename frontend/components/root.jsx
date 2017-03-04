import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import AuthFormContainer from './authform/auth_form_container';
import NotebookFormContainer from './notebook/notebook_form_container';
import NoteFormContainer from './notes/notes_form_container';
import NotesContainer from './notes/notes_container';
import NotesDetailContainer from './notes/notes_detail_container';

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
      <Route path="/" component={App} onEnter={_ensureLoggedIn}>
        <Route path="/notes/:noteId" component={NotesDetailContainer} onEnter={_ensureLoggedIn}/>
      </Route>
      <Route path="/signup" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
      <Route path="/login" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
      <Route path="/notes" component={NotesContainer} onEnter={_ensureLoggedIn} />
      <Route path="/notebook/new" component={NotebookFormContainer} onEnter={_ensureLoggedIn} />
      <Route path="/note/new" component={NoteFormContainer} onEnter={_ensureLoggedIn} />
    </Router>
  </Provider>
)

export default Root;
