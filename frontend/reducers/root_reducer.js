import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import NotebookReducer from './notebook_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  notebooks: NotebookReducer
});

export default rootReducer;
