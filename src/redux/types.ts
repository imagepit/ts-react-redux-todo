import { Action } from "redux";
import { ActionTypes } from "./actionTypes";

export type Todo = {
  value : string
}

export type State = {
  inputTodo: string,
    todos: Todo[]
}

interface InputAction extends Action {
  type: typeof ActionTypes.inputTodo,
    payload: string
}

interface AddAction extends Action {
    type: typeof ActionTypes.addTodo,
    payload: string
}

export type TodoActionTypes = InputAction | AddAction
