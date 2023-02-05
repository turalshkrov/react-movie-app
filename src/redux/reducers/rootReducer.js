import { combineReducers } from 'redux';
import listReducer from "./listReducer";
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    listReducer, searchReducer
});

export default rootReducer;