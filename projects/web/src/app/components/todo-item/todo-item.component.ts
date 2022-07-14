import { Component, Input } from '@angular/core';
import { Todo } from '../../todo.service';

@Component({
  selector: 'td-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo: Todo | null = null;

  constructor() {
  }
}
