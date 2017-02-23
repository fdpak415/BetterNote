import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _default_state = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state = _default_state, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
     return merge(newState, action.currentUser);
    case RECEIVE_ERRORS:
      return merge(newState, action.errors);
    default:
    return state;
  }
}

export default SessionReducer;
