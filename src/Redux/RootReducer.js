import {combineReducers} from 'redux'

import reducer from "./Reducer";
import postReducer from './PostReducer';

const rootReducer = combineReducers({reducer, postReducer})
export default rootReducer;