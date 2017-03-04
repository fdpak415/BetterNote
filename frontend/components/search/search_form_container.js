import {connect} from 'react-redux';
import SearchForm from './search_form';
import {fetchNotes} from '../../actions/note_actions';

const mapStateToProps = ({notes}) => ({
  notes: notes
})

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
