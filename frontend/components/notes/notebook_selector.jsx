import React from 'react';

class NotebookSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.noteDetail.notebook_id
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({value: e.currentTarget.value});
    this.props.update(e.currentTarget.value);
  }

  render() {
    const notebooks = this.props.notebooks;
    const bookId = this.props.noteDetail.notebook_id
    debugger;
    return(
        <select value={this.state.value} onChange={e => this.update(e)}>
          { notebooks.map((book, i) => <option  key={i} value={book.id}>{book.title}</option>)}
        </select>
    )
  }
}

export default NotebookSelector;
