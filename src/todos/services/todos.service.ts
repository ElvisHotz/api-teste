import { TodoEntity } from './../../model/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private repo: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<TodoEntity[]> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<TodoEntity> {
    return await this.repo.findOneBy({ id });
  }

  async create(entity: TodoEntity): Promise<TodoEntity> {
    return await this.repo.save(entity);
  }

  async update(entity: TodoEntity): Promise<UpdateResult> {
    return await this.repo.update(entity.id, entity);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
