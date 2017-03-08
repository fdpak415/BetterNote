import React from 'react';
import {withRouter} from 'react-router';
import TagForm2 from '../tags/tag_form2';
import NotebookSelector from './notebook_selector';
import TagDetail from '../tags/tag_detail';

class NoteDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.noteDetail.title,
      body: this.props.noteDetail.body,
      notebook_id: this.props.noteDetail.notebook_id,
      author_id: this.props.userId
    }

  }

  componentWillMount() {
    this.props.fetchNote(parseInt(this.props.params.noteId))
    .done(note => this.forceUpdate());
    this.props.fetchNotebooks();

  }



  componentWillReceiveProps(nextProps) {
    if (this.props.params.noteId !== nextProps.params.noteId) {
      this.props.fetchNote(nextProps.params.noteId);
    }
    this.forceUpdate()
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
        {this.props.noteDetail.title ?
        <form onSubmit={(e) => this.handleSubmit(e)}>

          <NotebookSelector notebooks={notebooks} />
          <br></br>

          Tags:
          <TagDetail note={noteDetail}/>
          <TagForm2 noteDetail={this.props.noteDetail} createTag={this.props.createTag} />

          <br></br>

          <input
            type="text"
            defaultValue={noteDetail.title}

            onChange={this.update('title')}></input>
          <br></br>

          <textarea
            defaultValue={noteDetail.body}

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
