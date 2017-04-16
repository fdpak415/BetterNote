import React from 'react';
import {Glyphicon} from 'react-bootstrap';

class NotebookSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.noteDetail.notebook_id
    }
    this.update = this.update.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.noteDetail !== this.props.noteDetail) {
      this.setState({value: nextProps.noteDetail.notebook_id});
    }

  }

  update(e) {
    this.setState({value: e.currentTarget.value});
    this.props.update(e.currentTarget.value);
  }

  render() {
    const notebooks = this.props.notebooks;
    const bookId = this.props.noteDetail.notebook_id

    return(
      <div>
        {this.state.value ?
        <select value={this.state.value} onChange={this.update}>
          { notebooks.map((book, i) => <option  key={i} value={book.id}><Glyphicon glyph="book" /> {book.title}</option>)}
        </select>
        :
        <div>loading</div>}
      </div>

    )
  }
}

export default NotebookSelector;
