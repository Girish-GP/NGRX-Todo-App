// We have to select state.todos.todos
/* As our state is 
 { 
  todos: {
      todos: []
    }
 }


*/

import { createSelector, createFeatureSelector } from "@ngrx/store";
import { TodoState } from "./todo.state";

//Below feature selector will select state.todos
export const selectTodoFeature = createFeatureSelector<TodoState>('todos')


//Basic selector to get actual todos
export const selectAllTodos = createSelector(selectTodoFeature,(state)=> state.todos);

//Derive selectors based on main selectors
export const selectCompletedTodos = createSelector(selectAllTodos,(todos)=> todos.filter(todo=> todo.completed));