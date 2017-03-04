import {connect} from 'react-redux';
import NotebookForm from './notebook_form';
import {createNotebook} from '../../actions/notebook_actions';

const mapStateToProps = ({session}) => ({
  userId: session.currentUser.id
})

const mapDispatchToProps = dispatch => ({
  createNotebook: notebook => dispatch(createNotebook(notebook))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookForm);
