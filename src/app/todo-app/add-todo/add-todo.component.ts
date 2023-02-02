import { Component, EventEmitter, Output } from '@angular/core';
import { todo } from 'src/app/todo';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<todo> = new EventEmitter();
  constructor(private _toastService: ToastService) {}
  onSubmit() {
    if (this.title == null || this.desc == null) {
      this._toastService.error('Error: Please Enter Title and description');
    } else {
      const newTodo = {
        sno: 10,
        title: this.title,
        desc: this.desc,
        active: false,
      };
      this.todoAdd.emit(newTodo);
      this.title = '';
      this.desc = '';
      this._toastService.info('Done');
    }
  }
}
