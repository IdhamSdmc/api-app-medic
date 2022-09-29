import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Juego {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  gam_Id: number;

  @Column({
    type: 'varchar',
  })
  gam_nombre: string;

  @Column({
    type: 'timestamp',
  })
  gam_createdAt: Date;

  @Column({
    type: 'timestamp',
  })
  gam_updatedAt: Date;
}
