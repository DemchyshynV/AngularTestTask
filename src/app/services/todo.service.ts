import {Injectable} from '@angular/core';
import {ITodo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoKey = 'todos'

  constructor() {
  }

  getAll(): ITodo[] {
    const storage = localStorage.getItem(this.todoKey);
    return storage ? JSON.parse(storage) : []
  }

  save(todo: ITodo): void {
    const todos = this.getAll();
    console.log(todo);
    if (!todo.id) {
      const last = todos[todos.length - 1];
      todo.id = last ? last.id + 1 : 1
      todos.push(todo)
    } else {
      let edit = todos.find(value => value.id === todo.id);
      Object.assign(edit, todo)
    }
    localStorage.setItem(this.todoKey, JSON.stringify(todos))
  }

  findById(id: number): ITodo {
    const todos = this.getAll();
    return todos.find(value => value.id === id) as ITodo;
  }

  delete(id: number): void {
    const todos = this.getAll();
    localStorage.setItem(this.todoKey, JSON.stringify(todos.filter(value => value.id !== id)))
  }
}
