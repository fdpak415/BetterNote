import {connect} from 'react-redux';
import NoteDetail from './note_detail';
import {fetchNote} from '../../actions/note_actions';
import {fetchNotebooks} from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  noteDetail: state.noteDetail,
  notebooks: state.notebooks
})

const mapDispatchToProps = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
  fetchNotebooks: () => dispatch(fetchNotebooks())
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
