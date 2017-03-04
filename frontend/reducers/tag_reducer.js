import {RECEIVE_TAG, RECEIVE_TAGS, DELETE_TAG} from '../actions/tag_actions';

import merge from 'lodash/merge';

const TagReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_TAG:
      const newTag = {[action.tag.id]: action.tag};
      return merge({}, state, newTag);
    case RECEIVE_TAGS:
      const newTags = action.tags
      return merge({}, state, newTags)
    default:
    return state;
  }
}

export default TagReducer;
