/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  emp_Id: number;

  @Column({
    unique: true,
    nullable: false,
    type: 'varchar', 
    length: 255
  })
  emp_razon_social: string;

  @Column({
    nullable: true,
    type: 'varchar', 
    length: 255
  })
  emp_file_image: string;

  @Column({
    nullable: false,
  })
  emp_estado: number;

  @Column({
    nullable: true,
    type: 'timestamp',
    name: 'emp_createdAt'
  })
  emp_createdAt: Date;

  @Column({
    nullable: true,
    type: Date,
    name: 'emp_updatedAt'
  })
  emp_updatedAt: Timestamp;
}
