import * as APIUtil from '../util/notes_api_util';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';

export const DELETE_NOTE = 'DELETE_NOTE';


export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const deleteNote = note => ({
  type: DELETE_NOTE,
  note
});

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const createNote = note => dispatch => (
  APIUtil.createNote(note)
  .then(note => (dispatch(receiveNote(note))))
);

export const fetchNotes = () => dispatch => (
  APIUtil.fetchNotes()
  .then(notes => (dispatch(receiveNotes(notes))))
);

export const fetchNote = (id) => dispatch => (
  APIUtil.fetchNote(id)
  .then(note => (dispatch(receiveNote(note))))
);

export const updateNote = (id, data) => dispatch => (
  APIUtil.updateNote(id, data)
  .then(note => (dispatch(receiveNote(note))))
);

export const destroyNote = (id) => dispatch => (
  APIUtil.deleteNote(id)
  .then((note) => (dispatch(deleteNote(note))))
);
