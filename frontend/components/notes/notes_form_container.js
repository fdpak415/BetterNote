import {connect} from 'react-redux';
import NotesForm from './notes_form';
import {createNote} from '../../actions/note_actions';
import {fetchNotebooks} from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
  notebooks: state.notebooks
})

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks())

})

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
