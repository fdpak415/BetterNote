import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import NotebookReducer from './notebook_reducer';
import NotebookDetailReducer from './notebook_detail_reducer';
import NoteReducer from './note_reducer';
import NoteDetailReducer from './note_detail_reducer';
import TagReducer from './tag_reducer';
import TagDetailReducer from './tag_detail_reducer';

const appReducer = combineReducers({
  session: SessionReducer,
  notebooks: NotebookReducer,
  notebook: NotebookDetailReducer,
  notes: NoteReducer,
  noteDetail: NoteDetailReducer,
  tags: TagReducer,
  tagDetail: TagDetailReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
