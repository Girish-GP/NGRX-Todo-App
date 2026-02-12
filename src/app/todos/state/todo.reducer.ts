import { addTodo,editTodo,deleteTodo } from "./todo.action";
import { createReducer,on } from "@ngrx/store";
import { initialTodoState, TodoState } from "./todo.state";
import { Todo } from "../models/todo.model";


//createReducer --> used for creating rule engines
//on(action,handler) --> Defines what happens when the action is dispatched
// ...state --> we copy the old state
//{
//   ...state,
//   todos: newArray
// } the returned new object

export const TodoReducer = createReducer(
    initialTodoState,

    //addTodo Reducer
    on(addTodo,(state:TodoState,{title})=>({
        ...state,
        todos: [
            ...state.todos,
            {
                id: state.todos.length +1,
                title: title,
                completed: false
            }
        ]
    })),

    //editTodo Reducer
    on(editTodo,(state,{id,title})=>({
        ...state,
        todos: state.todos.map((todo:Todo)=>{
            if(todo.id === id){
                return {...todo,title}
            }
            return todo
        })
    })),

    //deleteTodo Reducer
    on(deleteTodo,(state,{id})=>({
        ...state,
        todos: state.todos.filter(todo => todo?.id !== id)
    }))
);