import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import NotebookReducer from './notebook_reducer';
import NoteReducer from './note_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  notebooks: NotebookReducer,
  notes: NoteReducer
});

export default rootReducer;
