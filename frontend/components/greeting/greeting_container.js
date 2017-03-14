import {connect} from 'react-redux';
import {logout, userLogout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  userLogout: () => dispatch(userLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
