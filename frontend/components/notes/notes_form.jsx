import React from 'react';
import {withRouter} from 'react-router';
import TagForm from '../tags/tag_form';
import NotebookSelector from './notebook_selector';
import {Grid, Row, Col, Glyphicon} from 'react-bootstrap';


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
    this.addNotebook = this.addNotebook.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotebooks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notebooks !== this.props.notebooks) {
      this.setState({notebook_id: Object.values(nextProps.notebooks)[0].id})
    }
  }

  addTag(tag) {
    const tags = this.state.tags
    tags.push(tag.name)
    this.setState({tags: Array.from(new Set(tags))})
    this.forceUpdate();
  }

  addNotebook(bookId) {
    const notebookId = this.state.notebook_id
    this.setState({notebook_id: bookId});
    this.forceUpdate();
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = this.state;
    this.props.createNote({note}).then()
    this.props.router.push("/")
    window.location.reload();
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
      <div className ="new-note">
        <form className="new-form" onSubmit={(e) => this.handleSubmit(e)}>
          <Row className="new-note-row1">
            <div className="new-note-header">
              <Col xsOffset={1} xs={2}>
                <div className="new-note-notebook-selector-title">
                  Select a Notebook:
                </div>
                <select  onChange={ e => this.addNotebook(e.currentTarget.value)}>
                  { notebooks.map((book, i) => <option key={i} value={book.id}>{book.title}</option>)}
                </select>
              </Col>

              <Col xs={9}>
                <div className="new-note-tags">
                  <Glyphicon id="notes-form-glyph" glyph="tags" /><TagForm id="notes-form-tag-form" addTag={this.addTag} />
                </div>
              </Col>
            </div>
            <hr id="hr"></hr>
          </Row>

        <br></br>

      <Row className="note-title-row">
        <Col xsOffset={1} xs={12} className="note-title-col">
          <input
            className="new-note-title"
            type="text"
            placeholder="New Note..."
            value={this.state.title}
            onChange={this.update('title')}></input>

          <br></br>

          <textarea
            className="new-note-text"
            placeholder="Type Here..."
            value={this.state.body}
            onChange={this.update('body')}></textarea>
        </Col>
      </Row>

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
