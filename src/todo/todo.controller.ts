import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post('create')
  addTodos(
    @Body('title') todoTitle: string,
    @Body('description') todoDesc: string,
    @Body('price') todoPrice: number,
  ): any {
    const generatedId = this.todoService.createTodo(
      todoTitle,
      todoDesc,
      todoPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getAllTodo() {
    return { todo: this.todoService.getAllTodo() };
  }

  @Get(':id')
  getTodo(@Param('id') todoId: string) {
    return this.todoService.getSingleTodo(todoId);
  }
}
