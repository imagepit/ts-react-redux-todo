import { ActionTypes } from "./actionTypes";
import { State, TodoActionTypes } from "./types";

const initialState : State = {
    inputTodo: '',
    todos: []
}

export const TodoReducer = (state = initialState, action: TodoActionTypes) : State => {
    switch (action.type) {
        case ActionTypes.inputTodo:
            return { ...state, inputTodo: action.payload }
        case ActionTypes.addTodo:
            return { ...state, todos: state.todos.concat([{value: action.payload}]) }
    }
    return state;
}