import { AsyncPipe, NgFor } from '@angular/common';
import { Component, ElementRef, Inject, model, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todos/models/todo.model';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './todos/state/todo.selector';
import { addTodo, deleteTodo, editTodo, loadTodos } from './todos/state/todo.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AsyncPipe,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  todos$: Observable<Todo[]>;
  todoTitle = model<string>('');
 selectedTodo: Todo = {id:'',title:'',completed:false};
  constructor( private store:Store){
      this.todos$ = this.store.select(selectAllTodos);

  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }

  addTodoTask(){
    this.store.dispatch(addTodo({title: this.todoTitle()}));

    this.todoTitle.set('');
  }


  editPatchTodoTask(selectedTodo:Todo){
   this.selectedTodo = {...selectedTodo};
   this.todoTitle.set(this.selectedTodo.title);
  }

  updateTodoTask(){
    this.store.dispatch(editTodo({id:this.selectedTodo.id,title:this.todoTitle()}));
    this.selectedTodo = {id:'',title:'',completed:false};
    this.todoTitle.set('');

  }

  deleteTodoTask(id:string){
    this.store.dispatch(deleteTodo({id:id}));
  }
}
