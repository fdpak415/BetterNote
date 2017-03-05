import React from 'react';
import {Link} from 'react-router';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    const notes = this.props.notes
    const tagDetail = this.props.tagDetail
      return(
        <div>
          <h2>{tagDetail.name}:</h2>
          <ul>
            {notes.map((note, i) =>
            <li key={i}>
              <Link to={`searchtag/tagDetail.id/notes/${note.id}`}>
                <span>{note.title}</span>
              </Link>
            </li>)}
          </ul>
       </div>
     )
  }
}

export default NotesIndex;
