import {connect} from 'react-redux';
import NotesDetail from './notes_detail';
import {fetchNote} from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  note: state.noteDetail
})

const mapDispatchToProps = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesDetail);
