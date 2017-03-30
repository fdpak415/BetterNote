import React from 'react';
import {withRouter} from 'react-router';
import TagForm2 from '../tags/tag_form2';
import NotebookSelector from './notebook_selector';
import TagDetail from '../tags/tag_detail';
import { values } from 'lodash';
import ReactQuill from 'react-quill';
import Editor from '../../util/editor';
import {Col, Row} from 'react-bootstrap';

class NoteDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.noteDetail.title,
      body: this.props.noteDetail.body,
      notebook_id: this.props.noteDetail.notebook_id,
      author_id: this.props.userId,
      noteId: this.props.noteDetail.id,
      isFetching: false,
      isFetched: true
    }

    this.addNotebook = this.addNotebook.bind(this);
    this.update = this.update.bind(this);
    this.updateNotebookId = this.updateNotebookId.bind(this);
  }

  componentWillMount() {
    if (!this.props.params.noteId) {
      this.props.fetchNotes().done(notes => this.props.fetchNote(Object.values(notes.notes)[0].id))
    }
    this.props.fetchNote(parseInt(this.props.params.noteId))
    .done(note => this.forceUpdate());
    this.props.fetchNotebooks();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.noteId !== nextProps.params.noteId) {
      this.props.fetchNote(parseInt(nextProps.params.noteId));
    }
    this.setState({title: nextProps.noteDetail.title,
                   body: nextProps.noteDetail.body,
                   notebook_id: nextProps.noteDetail.notebook_id,
                   noteId: nextProps.noteDetail.id});
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

  update(e, property) {
    this.setState({[property]: e.currentTarget.value});
  }

  updateNotebookId(notebookId) {
    this.setState({notebook_id: notebookId})
  }

  addNotebook(bookId) {
    const notebookId = this.state.notebook_id
    this.setState({notebook_id: bookId});
    this.forceUpdate();
  }


  render() {
    window.location.reload();
    const notebooks = values(this.props.notebooks)
    const noteDetail = this.props.noteDetail;
    const notebookId = this.props.noteDetail.notebook_ids
    const notebook = notebooks.filter(book => book.id === notebookId)[0]

    if (this.props.noteDetail.id === parseInt(this.props.params.noteId)) {
      return(
          <div className="note-detail-div">

            <form className="note-detail-form" onSubmit={(e) => this.handleSubmit(e)}>

              <NotebookSelector notebookId={notebookId} addNotebook={this.addNotebook} noteDetail={noteDetail} update={this.updateNotebookId} notebooks={notebooks} />
              <br></br>

              Tags:
              <TagDetail note={noteDetail}/>
              <TagForm2 noteDetail={this.props.noteDetail} createTag={this.props.createTag} />

              <br></br>

              <input
                type="text"
                value={this.state.title}
                onChange={e => this.update(e, 'title')}></input>
              <br></br>

              <textarea
                className="text-area"
                value={this.state.body}
                onChange={e => this.update(e, 'body')}></textarea>

              <br></br>

              <input
                className="update-note-button"
                type="submit"
                value="Update Note"></input>

            </form>

          </div>
        )
    }  else {
      return(
        <div>Loading...</div>
      )
      }

    }



  }


export default withRouter(NoteDetail);
