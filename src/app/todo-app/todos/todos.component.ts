import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todosArr!: todo[];
  constructor() {
    this.todosArr = [
      {
        sno: 1,
        title: '1st Todo Item',
        desc: '1st Todo Item description',
        active: false,
      },
      {
        sno: 2,
        title: '2nd Todo Item',
        desc: '2nd Todo Item description',
        active: false,
      },
      {
        sno: 3,
        title: '3rd Todo Item',
        desc: '3rd Todo Item description',
        active: false,
      },
      {
        sno: 4,
        title: '4th Todo Item',
        desc: '4th Todo Item description',
        active: false,
      },
    ];
  }

  deleteTodo(todoItem: todo) {
    const index = this.todosArr.indexOf(todoItem);
    this.todosArr.splice(index, 1);
  }

  addTodo(newTodo: todo) {
    this.todosArr.unshift(newTodo);
  }
  ngOnInit(): void {}
}
