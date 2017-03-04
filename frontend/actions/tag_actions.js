import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';

export const DELETE_TAG = 'DELETE_TAG';


export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const deleteTag = tag => ({
  type: DELETE_TAG,
  tag
});

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const createTag = tag => dispatch => (
  APIUtil.createTag(tag)
  .then(tag => (dispatch(receiveTag(tag))))
);

export const fetchTags = () => dispatch => (
  APIUtil.fetchTags()
  .then(tags => (dispatch(receiveTags(tags))))
);

export const fetchTag = (id) => dispatch => (
  APIUtil.fetchTag(id)
  .then(tag => (dispatch(receiveTag(tag))))
);

export const updateTag = (id, data) => dispatch => (
  APIUtil.updateTag(id, data)
  .then(tag => (dispatch(receiveTag(tag))))
);

export const destroyTag = (id) => dispatch => (
  APIUtil.deleteTag(id)
  .then((tag) => (dispatch(deleteTag(tag))))
);
