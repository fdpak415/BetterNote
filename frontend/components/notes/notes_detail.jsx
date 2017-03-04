import React from 'react';
import {withRouter} from 'react-router';


class NotesDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount() {
    this.props.fetchNote(this.props.params.noteId);
  }

  render() {
    const noteDetail = this.props.noteDetail;
    return(
        <div>
          <h2></h2>
        </div>
    )
  }
}

export default withRouter(NotesDetail);
