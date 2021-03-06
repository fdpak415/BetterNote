import {RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS, DELETE_NOTEBOOK} from '../actions/notebook_actions';
import merge from 'lodash/merge';


const NotebookReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      const newNotebook = {[action.notebook.id]: action.notebook};
      return merge({}, state, newNotebook);
    case RECEIVE_NOTEBOOKS:
      const notebooks = action.notebooks
      return merge(newState, notebooks);
    case DELETE_NOTEBOOK:
      const bookId = action.id;
      delete newState[bookId];
      return newState;
    default:
    return state;
  }
}

export default NotebookReducer;
