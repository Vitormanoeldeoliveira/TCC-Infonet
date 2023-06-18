import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IState } from "../Interface/State.interface";
import { CityEntity } from "src/modules/city/Entities/city.entity";

@Entity('estado')
export class StateEntity implements IState {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  uf: string;

  @OneToOne(() => CityEntity, (city) => city.estado)
  cidade: CityEntity
}