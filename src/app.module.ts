import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoEntity } from './model/todo.entity';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/services/todos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todos.db',
      entities: [TodoEntity],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([TodoEntity]),
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
