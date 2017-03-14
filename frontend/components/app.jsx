import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import Sidebar from './sidebar/sidebar';
import NotesContainer from './notes/notes_container'
import SearchFormContainer from './search/search_form_container';
import {Grid, Row, Col, Rounded, Image, Clearfix} from 'react-bootstrap';

const App = ({children}) => (
  <div>
  <Grid id="grid" fluid={true}>

      <Col id="sidebar" xs={1}>
        <Sidebar />
      </Col>


      <Col xs={4}>
        <h1 className="home-header col-xs-offset-3">BetterNote</h1>
      </Col>

      <Col xs={4} className="pull-right text-right">
        <GreetingContainer />
      </Col>
    <Row>
      <Col xs={3} className="col-xs-offset-1 search-form">
        <SearchFormContainer />
      </Col>
    </Row>
      {children}
  </Grid>
  </div>
);

export default App;
