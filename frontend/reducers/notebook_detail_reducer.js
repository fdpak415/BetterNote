import {RECEIVE_NOTEBOOK} from '../actions/notebook_actions';
import merge from 'lodash/merge';


const NotebookDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      const newNotebook = {[action.notebook.id]: action.notebook};
      return merge({}, state, newNotebook);
    default:
    return state;
  }
}

export default NotebookDetailReducer;
