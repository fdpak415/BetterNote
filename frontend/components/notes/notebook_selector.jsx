import React from 'react';

class NotebookSelector extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const notebooks = this.props.notebooks;
    return(
        <select onChange={ e => this.props.addNotebook(e.currentTarget.value)}>
          { notebooks.map((book, i) => <option key={i} value={book.id}>{book.title}</option>)}
        </select>
    )
  }
}

export default NotebookSelector;
