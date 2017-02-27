import React from 'react';
import {withRouter} from 'react-router';
import NotesHeader from './notes_header';
import TagForm from '../tags/tag_form';

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      notebook_id: '',
      author_id: this.props.userId,
      tags: []
    }
    this.addTag = this.addTag.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }



  componentWillMount() {
    this.props.fetchNotebooks();
  }

  defaultNotebookId() {
    debugger;
    const notebookss = Object.values(this.props.notebooks)[0].id
    this.setState({['notebook_id']: notebookss})
  }


  addTag(tag) {
    const tags = this.state.tags
    tags.push(tag.name)
    this.forceUpdate();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.defaultNotebookId();
    const note = this.state;
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

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select onChange={this.update('notebook_id')} value={this.state.notebook_id}>
            { notebooks.map((book, i) => <option key={i} value={book.id}>{book.title}</option>)}
          </select>


          <br></br>

          Tags: <TagForm addTag={this.addTag} createTag={this.props.createTag} />

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
