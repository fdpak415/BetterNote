import {RECEIVE_TAG, DELETE_TAG} from '../actions/tag_actions';

import merge from 'lodash/merge';

const TagDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_TAG:
      const newTag = action.tag;
      return merge({}, state, newTag);
    default:
    return state;
  }
}

export default TagDetailReducer;
