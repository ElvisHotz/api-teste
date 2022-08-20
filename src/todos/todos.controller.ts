import { TodoEntity } from './../model/todo.entity';
import { TodosService } from './services/todos.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('todos')
export class TodosController {
  constructor(private readonly service: TodosService) {}

  @Get()
  @HttpCode(200)
  getTodos(): Promise<TodoEntity[]> {
    return this.service.findAll();
  }

  @Post('create')
  async create(@Body() entitytData: TodoEntity): Promise<any> {
    return this.service.create(entitytData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() entityData: TodoEntity): Promise<any> {
    entityData.id = Number(id);
    return this.service.update(entityData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.service.delete(id);
  }

  @Get(':id')
  @HttpCode(200)
  getOneTodo(@Param() params): Promise<TodoEntity> {
    console.log(params.id);
    return this.service.findOne(params.id);
    `This action returns as #${params.id} ${params.nome} id`;
  }
}
