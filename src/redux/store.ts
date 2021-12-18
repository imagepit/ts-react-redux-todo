import { combineReducers, createStore } from "redux";
import { TodoReducer } from "./reducer";

const RootReducer = combineReducers({ todo: TodoReducer })
export type RootState = ReturnType<typeof RootReducer>
const store = createStore(RootReducer)
export default store
