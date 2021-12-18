import { ActionTypes } from "./actionTypes";
import { TodoActionTypes } from "./types";

export const input = (todo:string) : TodoActionTypes => {
    return {
        type: ActionTypes.inputTodo,
        payload: todo
    }
}

export const add = (todo:string) : TodoActionTypes => {
    return {
        type: ActionTypes.addTodo,
        payload: todo
    }
}