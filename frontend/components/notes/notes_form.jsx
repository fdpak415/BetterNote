import React from 'react';
import {withRouter} from 'react-router';
import NotesHeader from './notes_header';

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      notebook_id: 1,
      author_id: this.props.userId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotebooks();
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = this.state
    this.props.createNote({note})
    this.props.router.push("/")
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});
    }
  }

  cancelButton(e) {
    e.preventDefault();
    this.props.router.push('/');
  }



  render() {
    const notebooks = Object.values(this.props.notebooks)
    return(
      <div>

        <form onSubmit={this.handleSubmit}>
          <select onChange={this.update('notebook_id')}>
            { notebooks.map((book, i) => <option value={book.id}>{book.title}</option>)}
          </select>

          <br></br>

          <input
            type="text"
            placeholder="New Note..."
            value={this.state.title}
            onChange={this.update('title')}></input>

          <br></br>

          <textarea
            placeholder="Type Here..."
            value={this.state.body}
            onChange={this.update('body')}></textarea>

          <input
            type="submit"
            value="Create Note"></input>

          <input
            type="button"
            value="Cancel"
            onClick={this.cancelButton}></input>

        </form>
      </div>
    )
  }
}

export default withRouter(NoteForm);
