import React from 'react';
import {withRouter} from 'react-router';
import NotesIndex from '../notes/notes_index';
import {fetchNotebook} from '../../util/notebook_api_util';
import {receiveNotebook} from '../../actions/notebook_actions';

class NotebookNotes extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: this.props.notes,
      notebook: this.props.notebook
    }

    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

    componentWillMount(){
      this.props.fetchNotebook(parseInt(this.props.params.notebookId));
      fetchNotebook(parseInt(this.props.params.notebookId))
      .done(notebook => this.setState({notes: notebook.notes, notebook: notebook}))

    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.notes !== this.props.notes) {
        this.setState({notes: nextProps.notes})

      }
    }


  render() {
    const notes = this.state.notes;
    const notebook = this.state.notebook
    return(
      <div>
        {this.state.notes ?
          <div><NotesIndex notes={notes} notebook={notebook} /></div>
        :
          <div>Loading...</div>}
      </div>
    )
  }
}

export default withRouter(NotebookNotes);
