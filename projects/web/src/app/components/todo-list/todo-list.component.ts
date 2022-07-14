import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  EventEmitter, Input,
  OnChanges, OnDestroy,
  OnInit,
  Output, QueryList,
  SimpleChanges, ViewChildren
} from '@angular/core';
import { Todo, TodoService } from '../../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Output() selectedChange: EventEmitter<Todo> = new EventEmitter<Todo>();

  todos: Todo[] = this.todoService.todos;

  constructor(private todoService: TodoService) {
  }

  select(todo: Todo) {
    this.selectedChange.emit({ ...todo });
  }

  getNgClass(todo: any): any {
    return {
      important: todo.important,
      done: todo.done,
    }
  }
}
