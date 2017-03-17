import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import Sidebar from './sidebar/sidebar';
import NotesContainer from './notes/notes_container'
import SearchFormContainer from './search/search_form_container';
import {Grid, Row, Col, Rounded, Image, Clearfix} from 'react-bootstrap';

const App = ({children}) => (
  <div id="wrapper">
    <div id="sidebar-wrapper">
      <Sidebar className="sidebar-nav"/>
    </div>

    <div id="page-content-wrapper">
      <div className="page-content">
        <Grid fluid={true} >

        <Row>
          <Col xs={4} className="search-form">
            <SearchFormContainer />
          </Col>

          <Col xs={7} className="note-detail">
            {children}
          </Col>

        </Row>
        </Grid>
      </div>
    </div>

  </div>
);

export default App;
