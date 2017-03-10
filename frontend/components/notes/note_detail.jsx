import React from 'react';
import {withRouter} from 'react-router';
import TagForm2 from '../tags/tag_form2';
import NotebookSelector from './notebook_selector';
import TagDetail from '../tags/tag_detail';
import { values } from 'lodash';

class NoteDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.noteDetail.title,
      body: this.props.noteDetail.body,
      notebook_id: this.props.noteDetail.notebook_id,
      author_id: this.props.userId
    }

    this.addNotebook = this.addNotebook.bind(this);
  }

  componentWillMount() {
    this.props.fetchNote(parseInt(this.props.params.noteId))
    .done(note => this.forceUpdate());
    this.props.fetchNotebooks();

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.noteId !== nextProps.params.noteId) {
      this.props.fetchNote(parseInt(nextProps.params.noteId));
    }
    this.setState({title: nextProps.noteDetail.title,
                   body: nextProps.noteDetail.body});
  }

  routeIsCorrect() {
    return parseInt(this.props.params.noteId) === this.props.noteDetail.id;
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = this.state;
    const id = parseInt(this.props.params.noteId)
    this.props.updateNote(id, {note})
    this.props.router.push("/")
    window.location.reload();
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});

    }
  }

  addNotebook(bookId) {
    const notebookId = this.state.notebook_id
    this.setState({notebook_id: bookId});
    this.forceUpdate();
  }

  render() {
    const notebooks = values(this.props.notebooks)
    const noteDetail = this.props.noteDetail;

    return(
      <div>
        {this.props.noteDetail.title ?
        <form onSubmit={(e) => this.handleSubmit(e)}>

          <NotebookSelector addNotebook={this.addNotebook} noteDetail={noteDetail} updateNote={this.props.updateNote} notebooks={notebooks} />
          <br></br>

          Tags:
          <TagDetail note={noteDetail}/>
          <TagForm2 noteDetail={this.props.noteDetail} createTag={this.props.createTag} />

          <br></br>

          <input
            type="text"
            value={this.state.title}
            onChange={this.update('title')}></input>
          <br></br>

          <textarea
            value={this.state.body}

            onChange={this.update('body')}></textarea>

          <input
            type="submit"
            value="Update Note"></input>

        </form>
        :
          <div>Loading...</div>}
      </div>
    )
  }
}

export default withRouter(NoteDetail);
