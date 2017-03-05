import React from 'react';
import {withRouter} from 'react-router';
import TagForm from '../tags/tag_form';
import NotebookSelector from './notebook_selector';
import TagDetail from '../tags/tag_detail';

class NoteDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.noteDetail.title,
      body: this.props.noteDetail.body,
      notebook_id: this.props.noteDetail.notebook_id,
      author_id: this.props.userId,
      tags: []
    }

    this.addTag = this.addTag.bind(this);

  }

  componentWillMount() {
    this.props.fetchNote(parseInt(this.props.params.noteId));
    this.props.fetchNotebooks();

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.noteId !== nextProps.params.noteId) {
      this.props.fetchNote(nextProps.params.noteId);
    }
  }

  routeIsCorrect() {
    return parseInt(this.props.params.noteId) === this.props.noteDetail.id;
  }

  addTag(tag) {
    const tags = this.state.tags
    tags.push(tag.name)
    this.forceUpdate();
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = this.state;
    this.props.createNote({note})
    this.props.router.push("/")
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});
    }
  }

  render() {
    const notebooks = Object.values(this.props.notebooks)
    const noteDetail = this.props.noteDetail;

    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>

          <NotebookSelector notebooks={notebooks} />
          <br></br>

          Tags:
          <TagDetail note={noteDetail}/>
          <TagForm addTag={this.addTag} />

          <br></br>

          <input
            type="text"
            placeholder={noteDetail.title}
            value={this.state.title}
            onChange={this.update('title')}></input>

          <br></br>

          <textarea
            placeholder={noteDetail.body}
            value={this.state.body}
            onChange={this.update('body')}></textarea>

          <input
            type="submit"
            value="Update Note"></input>

        </form>
      </div>
    )
  }
}

export default withRouter(NoteDetail);
