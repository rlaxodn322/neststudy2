import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Community {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  content: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
