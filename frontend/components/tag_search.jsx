import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import Sidebar from './sidebar/sidebar';
import NotesContainer from './notes/notes_container'
import SearchFormContainer from './search/search_form_container';
const App2 = ({children}) => (
  <div>
    <h1>BetterNote</h1>
    <GreetingContainer />
    <Sidebar />
    <NotesContainer />
    {children}
  </div>
);

export default App2;
