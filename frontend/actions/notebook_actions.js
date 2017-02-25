import * as APIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';

export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';


export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const deleteNotebook = notebook => ({
  type: DELETE_NOTEBOOK,
  notebook
});

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const createNotebook = notebook => dispatch => (
  APIUtil.createNotebook(notebook)
  .then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const fetchNotebooks = () => dispatch => (
  APIUtil.fetchNotebooks()
  .then(notebooks => (dispatch(receiveNotebooks(notebooks))))
);

export const fetchNotebook = (id) => dispatch => (
  APIUtil.fetchNotebook(id)
  .then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const updateNotebook = (id, data) => dispatch => (
  APIUtil.updateNotebook(id, data)
  .then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const destroyNotebook = (id) => dispatch => (
  APIUtil.deleteNotebook(id)
  .then((notebook) => (dispatch(deleteNotebook(notebook))))
);
