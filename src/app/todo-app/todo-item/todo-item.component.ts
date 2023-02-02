import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input()
  todoItem!: todo;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  onDelete(todoItem: todo) {
    this.todoDelete.emit(todoItem);
  }
}
