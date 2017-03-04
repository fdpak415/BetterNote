import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import NotebookReducer from './notebook_reducer';
import NoteReducer from './note_reducer';
import NoteDetailReducer from './note_detail_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  notebooks: NotebookReducer,
  notes: NoteReducer,
  noteDetail: NoteDetailReducer
});

export default rootReducer;
