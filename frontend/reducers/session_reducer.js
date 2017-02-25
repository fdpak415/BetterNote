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
    const currentUser = action.currentUser
     return merge(newState, {currentUser});
    case RECEIVE_ERRORS:
    const errors = action.errors
      return merge(newState, {errors});
    default:
    return state;
  }
}

export default SessionReducer;
