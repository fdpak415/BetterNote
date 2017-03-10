import {connect} from 'react-redux';
import SearchForm from './search_form';
import {fetchNotes, destroyNote} from '../../actions/note_actions';


const mapStateToProps = (state) => {
  const isFetching = state.notes.isFetching || true


  return {
    notes: state.notes,
    isFetching: isFetching
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  destroyNote: id => dispatch(destroyNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
