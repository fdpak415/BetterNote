import {RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS, DELETE_NOTEBOOK} from '../actions/notebook_actions';
import merge from 'lodash/merge';


const NotebookReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      return merge(newState, {notebook});
    case RECEIVE_NOTEBOOKS:
      return merge(newState, {notebooks});
    case DELETE_NOTEBOOK:
      const bookId = action.notebook.id;
      return newState.filter(notebookId => notebookId !== bookId);
    default:
    return state;
  }
}

export default NotebookReducer;
