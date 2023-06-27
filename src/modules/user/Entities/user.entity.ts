import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../Interface/user.interface";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";

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

  @OneToMany(() => PlantationEntity, (plantation) => plantation.usuario)
  plantacao: [];
}