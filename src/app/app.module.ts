import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { TodosComponent } from './todo-app/todos/todos.component';
import { TodoItemComponent } from './todo-app/todo-item/todo-item.component';
import { AddTodoComponent } from './todo-app/add-todo/add-todo.component';
import { DeleteTodoComponent } from './todo-app/delete-todo/delete-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    DeleteTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
