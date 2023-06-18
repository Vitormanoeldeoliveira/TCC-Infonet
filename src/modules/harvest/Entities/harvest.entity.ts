import { 
  Column,
  Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn
} from "typeorm";
import { IHarvest } from "../Interface/harvest.interface";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";

@Entity('safra')
export class HarvestEntity implements IHarvest {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  periodo: string;
  @Column()
  id_plantacao: number;
  
  @OneToOne(
    () => PlantationEntity,
    (plantation) => plantation.safra,
  )
  @JoinColumn({
    name: 'id_plantacao',
    referencedColumnName: 'id',
  })
  plantacao: PlantationEntity;
}