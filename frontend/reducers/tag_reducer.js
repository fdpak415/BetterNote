import {RECEIVE_TAG, RECEIVE_TAGS, DELETE_TAG} from '../actions/tag_actions';

import merge from 'lodash/merge';

const TagReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_TAGS:
      const newTags = action.tags
      return merge({}, newTags)
    default:
    return state;
  }
}

export default TagReducer;
