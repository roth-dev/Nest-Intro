import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.model';
@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  createTodo(title: string, description: string, price: number) {
    const _id: string = new Date().toISOString();
    const newTodo = new Todo(_id, title, description, price);
    this.todos.push(newTodo);
    return _id;
  }

  getAllTodo() {
    return [...this.todos];
  }

  getSingleTodo(id: string) {
    const findTodo = this.todos.find((td) => td.id === id);
    if (!id) {
      throw new NotFoundException('Could not find todo.');
    }
    return { ...findTodo };
  }
}
