import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import Sidebar from './sidebar/sidebar';

const App = ({children}) => (
  <div>
    <h1>BetterNote</h1>
    <GreetingContainer />
    <Sidebar />
    {children}
  </div>
);

export default App;
