import {connect} from 'react-redux';
import SearchForm from './search_form';
import {fetchNotes, destroyNote} from '../../actions/note_actions';


const mapStateToProps = (state) => {
  const notes = state.notes || {}
  const isFetching = state.notes.isFetching || {
    isFetching: true
  }

  return {
    notes: notes,
    isFetching: isFetching
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  destroyNote: id => dispatch(destroyNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
