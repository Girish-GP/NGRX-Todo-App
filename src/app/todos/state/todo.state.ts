import { Todo } from "../models/todo.model";

export interface TodoState {
    todos: Todo[];
    loading: boolean; // UI loading state for api calls
    error: string | null; // Error state when api throws error
}


export const initialTodoState : TodoState = {
    todos: [],
    loading: false,
    error:null
}