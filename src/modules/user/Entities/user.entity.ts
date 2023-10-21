import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../Interface/user.interface";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";
import { PlantEntity } from "src/modules/plant/Entities/plant.entity";
import { StateEntity } from "src/modules/State/Entities/State.entity";
import { ProfitEntity } from "src/modules/profit/Entities/profit.entity";

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
  @Column()
  excluido: boolean;

  @OneToMany(() => PlantationEntity, (plantation) => plantation.usuario)
  plantacao: [];

  @OneToMany(() => PlantEntity, (plant) => plant.usuario)
  planta: [];

  @OneToMany(() => ProfitEntity, (profit) => profit.usuario)
  lucro: [];

  @ManyToMany(() => StateEntity, (state) => state.usuario)
  estado: StateEntity;
}