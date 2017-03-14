import {connect} from 'react-redux';
import Notebooks from './notebooks';
import {fetchNotebooks, destroyNotebook} from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  notebooks: state.notebooks
})

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  destroyNotebook: id => dispatch(destroyNotebook(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);
