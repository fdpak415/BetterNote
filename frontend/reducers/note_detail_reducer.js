import {RECEIVE_NOTE} from '../actions/note_actions';

import merge from 'lodash/merge';

const NoteDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_NOTE:
      const newNote = {[action.note.id]: action.note};
      return merge({}, state, newNote);
    default:
    return state;
  }
}

export default NoteDetailReducer;
