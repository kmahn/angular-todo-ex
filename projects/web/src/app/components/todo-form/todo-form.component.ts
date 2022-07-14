import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../todo.service';

@Component({
  selector: 'td-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  private _todo: Partial<Todo>;

  constructor(private todoService: TodoService) {
    this._todo = this.reset();
  }

  @Input() set todo(todo: Partial<Todo> | null) {
    if (todo) {
      this._todo = todo;
    } else {
      this._todo = this.reset();
    }
  }

  get todo(): Partial<Todo> {
    return this._todo;
  }

  reset(): Partial<Todo> {
    this.todo = {
      title: '',
      important: false,
      dueDate: null,
      done: false,
    };
    return this.todo;
  }

  submit() {
    if (this.todo.id) {
      this.todoService.updateTodo(this.todo.id, this.todo);
    } else {
      this.todoService.addTodo(this.todo);
    }
    this.reset();
  }

  getDateString(date?: Date | null) {
    if (!date) {
      return null;
    }

    const y = String(date.getFullYear()).padStart(4, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return [y, m, d].join('-');
  }

  changeDueDate(date: any) {
    this.todo.dueDate = new Date(date);
  }

  ngOnInit(): void {
  }

}
