import { combineReducers } from "redux";
import {messageReducer} from './message/message.reducer'
let rootReducer = combineReducers({messageReducer})
export  {rootReducer}