import {connect} from 'react-redux';
import NotebookNotes from './notebook_notes';
import {fetchNotebook} from '../../actions/notebook_actions';

const mapStateToProps = (state) => {

  return {
  notes: state.notebook.notes,
  notebook: state.notebook
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookNotes);
