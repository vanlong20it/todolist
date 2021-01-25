import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todolist: todoReducer,
});

export default rootReducer;