import { createAction,props } from "@ngrx/store";
import { Todo } from "../models/todo.model";


// export const actionName = createAction(
//     '[Feature] Event Name',//This is just a string identifier
//     props<{...}>() //Defines what data the action carries
// )

export const addTodo = createAction(
    '[Todo] Add Todo',
    props<{title:string}>()
)

export const editTodo = createAction(
    '[Todo] Edit Todo',
    props<{id:string,title:string}>()
)

export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props<{id:string}>()
)


//load Todos action
export const loadTodos = createAction(
    '[Todo] Load Todos'
)

//success action
export const loadTodosSuccess = createAction(
    '[Todo] Load Todos Success',
    props<{todos: Todo[]}>()
)

// error action
export const loadTodosFailure = createAction(
    '[Todo] Load Todos Failure',
    props<{error:string}>()
)