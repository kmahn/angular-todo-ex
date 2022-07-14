import { Component } from '@angular/core';
import { Todo } from './todo.service';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  selectedTodo: Todo | null = null;

  constructor() {
  }

  select(todo: Todo) {
    this.selectedTodo = todo;
  }
}
