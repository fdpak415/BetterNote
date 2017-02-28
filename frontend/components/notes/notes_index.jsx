import React from 'react';
import {Link} from 'react-router';

const NotesIndex = ({notes}) => {

  return(
    <div>
      <h2>My Notes</h2>
      <ul>
        {notes.map((note, i) =>
        <li key={i}>
          <Link to={`/notes/${note.id}`}>
            <span>{note.title}</span>
          </Link>
        </li>)}
      </ul>
   </div>
 )
}

export default NotesIndex;
