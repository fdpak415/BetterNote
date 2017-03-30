import {connect} from 'react-redux';
import NoteDetail from './note_detail';
import {fetchNote, updateNote, fetchNotes} from '../../actions/note_actions';
import {fetchNotebooks} from '../../actions/notebook_actions';
import {createTag} from '../../actions/tag_actions';


const mapStateToProps = (state) => ({
  noteDetail: state.noteDetail,
  notebooks: state.notebooks
})

const mapDispatchToProps = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  createTag: tag => dispatch(createTag(tag)),
  updateNote: (id, data) => dispatch(updateNote(id, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
