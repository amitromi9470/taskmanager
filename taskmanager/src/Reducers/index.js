import { combineReducers } from "redux";
import serverReducer from './serverReducer'
import taskReducer from './taskReducer'

export default combineReducers({
    servers: serverReducer,
    totalTasks: taskReducer
}) 