import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../Interface/user.interface";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";
import { PlantEntity } from "src/modules/plant/Entities/plant.entity";
import { StateEntity } from "src/modules/State/Entities/State.entity";

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
  @Column()
  avatar: string;

  @OneToMany(() => PlantationEntity, (plantation) => plantation.usuario)
  plantacao: [];

  @OneToMany(() => PlantEntity, (plant) => plant.usuario)
  planta: [];

  @ManyToMany(() => StateEntity, (state) => state.usuario)
  estado: StateEntity
}