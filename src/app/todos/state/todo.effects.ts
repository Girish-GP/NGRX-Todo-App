import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoApiService } from "../todo.api.service";
import { loadTodos, loadTodosFailure, loadTodosSuccess } from "./todo.action";
import { switchMap,of,catchError,map } from "rxjs";
import { Todo } from "../models/todo.model";

@Injectable()
export class TodoEffects {
  
  private actions$ = inject(Actions);
  private todoService = inject(TodoApiService);
  loadTodos$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(loadTodos),
      switchMap(()=> this.todoService.getTodo().pipe(
        map((todos:Todo[])=> loadTodosSuccess({todos:todos})),
        catchError((error)=> of(loadTodosFailure({error: error?.message ?? 'Failed to load Todos'})))
      ))

    )
  })
}