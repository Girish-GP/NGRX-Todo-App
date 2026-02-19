import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Todo } from "./models/todo.model";

@Injectable({providedIn:'root'})
export class TodoApiService {
    getTodo(): Observable<Todo[]> {
        const mockData: Todo[] = [
        { id: '101', title: 'Learn Effects', completed: false },
        { id: '102', title: 'Understand Async Flow', completed: false }
        ];
     return of(mockData).pipe(delay(500))
    }
}