import { 
  Column,
  Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ICity } from "../Interface/city.interface";
import { StateEntity } from "src/modules/State/Entities/State.entity";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";

@Entity('cidade')
export class CityEntity implements ICity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  cep: number;
  @Column()
  id_estado: number;
  
  @OneToOne(
    () => StateEntity,
    (state) => state.cidade,
  )
  @JoinColumn({
    name: 'id_estado',
    referencedColumnName: 'id',
  })
  estado: StateEntity;

  @OneToMany(() => PlantationEntity, (plantation) => plantation.cidade)
  plantacao: [];
}