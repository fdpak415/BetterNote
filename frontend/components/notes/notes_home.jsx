import React from 'react';
import {withRouter} from 'react-router';
import NotesIndex from './notes_index';
import SearchForm from '../search/search_form';

class NotesHome extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: null
    }

  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  render() {
    const notes = Object.values(this.props.notes)
    return(
        <div>
          <NotesIndex notes={notes} />

        </div>
    )
  }
}

export default withRouter(NotesHome);
