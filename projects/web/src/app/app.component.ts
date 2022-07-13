import { Component } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  todos: Todo[];
  todoForm: Partial<Todo>;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
    this.todoForm = this.reset();
  }

  reset(): Partial<Todo> {
    this.todoForm = {
      title: '',
      important: false,
      dueDate: null,
      done: false,
    };
    return this.todoForm;
  }

  submit() {
    if (this.todoForm.id) {
      this.todoService.updateTodo(this.todoForm.id, this.todoForm);
    } else {
      this.todoService.addTodo(this.todoForm);
    }
    this.reset();
  }

  select(todo: Todo) {
    this.todoForm = { ...todo };
  }

  getNgClass(todo: any): any {
    return {
      important: todo.important,
      done: todo.done,
    }
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo.id);
  }

  getDateString(date?: Date | null) {
    if (!date) {
      return null;
    }

    const y = String(date.getFullYear()).padStart(4, '0');
    const m = String(date.getMonth() +1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return [y, m, d].join('-');
  }

  changeDueDate(date: any) {
    this.todoForm.dueDate = new Date(date);
  }
}
