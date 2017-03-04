import { RECEIVE_NOTES, DELETE_NOTE} from '../actions/note_actions';
import {RECEIVE_TAG, RECEIVE_TAGS, DELETE_TAG} from '../actions/note_actions';

import merge from 'lodash/merge';


const NoteReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_NOTES:
      const notes = action.notes
      return merge(newState, notes);
    case DELETE_NOTE:
      const noteId = action.note.id;
      delete newState[noteId];
      return newState;

    default:
    return state;
  }
}

export default NoteReducer;
