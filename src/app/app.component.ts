import { AsyncPipe, NgFor } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todos/models/todo.model';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './todos/state/todo.selector';
import { addTodo, deleteTodo, editTodo } from './todos/state/todo.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AsyncPipe,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  todos$: Observable<Todo[]>;
  @ViewChild('inputRef') inputRef !: ElementRef<HTMLInputElement>;
 selectedTodo: Todo = {id:'',title:'',completed:false};
  constructor( private store:Store){
        this.todos$ = this.store.select(selectAllTodos);

  }

  ngOnInit(): void {
    
  }

  addTodoTask(){
    this.store.dispatch(addTodo({title: this.inputRef.nativeElement.value}));

    this.inputRef.nativeElement.value = '';
  }


  editPatchTodoTask(selectedTodo:Todo){
   this.selectedTodo = {...selectedTodo};
   this.inputRef.nativeElement.value = this.selectedTodo.title;
  }

  updateTodoTask(){
    this.store.dispatch(editTodo({id:this.selectedTodo.id,title:this.inputRef.nativeElement.value}));
    this.selectedTodo = {id:'',title:'',completed:false};
    this.inputRef.nativeElement.value = '';
  }

  deleteTodoTask(id:string){
    this.store.dispatch(deleteTodo({id:id}));
  }
}
