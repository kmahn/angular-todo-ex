import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  important: boolean;
  dueDate: Date | null;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    {
      id: 1,
      title: '공부',
      important: true,
      dueDate: new Date('2022-07-14'),
      done: false,
    },
    {
      id: 2,
      title: '친구만나기',
      important: true,
      dueDate: new Date('2022-07-16'),
      done: true,
    },
    {
      id: 3,
      title: '생일선물사기',
      dueDate: new Date('2022-07-21'),
      important: true,
      done: false,
    },
  ];

  constructor() { }

  getTodo(id: number): Todo | null {
    return this.todos.find(t => t.id === id) || null;
  }

  addTodo(todo: Partial<Todo>): void {
    if (this.todos.length === 0) {
      todo.id = 1;
    } else {
      todo.id = this.todos[this.todos.length - 1].id + 1;
    }
    this.todos.push(todo as Todo);
  }

  updateTodo(id: number, todo: Partial<Todo>): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos[index] = todo as Todo;
    }
  }

  removeTodo(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
