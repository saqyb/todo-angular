import { Component } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-angular';
  body = 'lorem20';
  count = 0;
  constructor() {
    setTimeout(() => {
      this.body = 'Body is changed';
    }, 3000);
  }
}
