import {connect} from 'react-redux'
import {login, signup} from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors || []
})

const mapDispatchToProps = (dispatch, {location})  => {
  const formType = location.pathname.slice(1)
  const processForm = (formType === "signup") ? signup : login;
  return {
    formType: formType,
    processForm: user => dispatch(processForm(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
