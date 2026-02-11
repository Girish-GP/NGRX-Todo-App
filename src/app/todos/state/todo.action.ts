import { createAction,props } from "@ngrx/store";


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
    props<{id:number,title:string}>()
)

export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props<{id:number}>()
)