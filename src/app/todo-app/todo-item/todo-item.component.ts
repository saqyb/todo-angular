import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todo } from 'src/app/todo';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input()
  todoItem!: todo;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  @Output() activeToggle: EventEmitter<todo> = new EventEmitter();
  constructor(private _toastService: ToastService) {}

  onDelete(todoItem: todo) {
    this.todoDelete.emit(todoItem);
    this._toastService.info(todoItem.title + ' Deleted');
  }
  onDone(todoItem: todo) {
    console.log('Toggle Active');
    this.activeToggle.emit(todoItem);
  }
}
