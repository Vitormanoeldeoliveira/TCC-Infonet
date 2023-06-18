import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../Interface/user.interface";

@Entity('usuario')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  senha: string;
}