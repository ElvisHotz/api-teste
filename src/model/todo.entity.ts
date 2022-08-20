import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60, comment: 'Este é um comentario de columna' })
  description: string;

  @Column({ default: false })
  done: boolean;
}
