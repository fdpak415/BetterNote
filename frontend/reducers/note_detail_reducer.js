import {RECEIVE_NOTE} from '../actions/note_actions';
import {RECEIVE_TAG, RECEIVE_TAGS, DELETE_TAG} from '../actions/note_actions';

import merge from 'lodash/merge';

const NoteDetailReducer = (state = {tags: {}}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_NOTE:
      const newNote = action.note;
      return merge({}, state, newNote);
    case RECEIVE_TAG:
      const newTag = {[action.tag.id]: action.tag};
      return merge({}, state, newTag);
    case RECEIVE_TAGS:
      const newTags = action.tags;
      return merge({}, state, newTags)
    default:
    return state;
  }
}

export default NoteDetailReducer;
