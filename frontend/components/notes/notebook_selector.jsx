import React from 'react';

class NotebookSelector extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const notebooks = this.props.notebooks;
    const bookId = this.props.noteDetail.notebook_id
    return(
        <select >
          { notebooks.map((book, i) => <option  key={i} value={book.id}>{book.title}</option>)}
        </select>
    )
  }
}

export default NotebookSelector;
