import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { input, add } from './redux/action';

export default function TodoApp() {
  const todoState = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  const OnInput = (value:string) => { dispatch(input(value)) }
  const OnAdd = (todo:string) => { dispatch(add(todo)) }
  return (
    <div>
      <h1>Todoアプリ</h1>
      <input type="text" onChange={(e) => OnInput(e.target.value)} />
      <input type="button" value="add" onClick={() => OnAdd(todoState.inputTodo)} />
      <ul>
        {
          todoState.todos.map(function(item, i) {
            return (
              <li key={i}>{item.value}</li>
            );
          })
        }
      </ul>
    </div>
  );
}