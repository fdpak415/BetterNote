import React from 'react';
import Sidebar from './sidebar/sidebar';
import NotesFormContainer from './notes/notes_form_container';

import {Grid, Row, Col, Rounded, Image, Clearfix} from 'react-bootstrap';

const NewNote = () => (
  <div id="wrapper">
    <div id="sidebar-wrapper">
      <Sidebar className="sidebar-nav"/>
    </div>

    <div id="page-content-wrapper">
      <div className="page-content">
        <Grid fluid={true} >
            <NotesFormContainer />
        </Grid>
      </div>
    </div>

  </div>
)

export default NewNote;
