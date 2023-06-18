import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPlantation } from "../Interface/plantation.interface";
import { HarvestEntity } from "src/modules/harvest/Entities/harvest.entity";

@Entity('plantacao')
export class PlantationEntity implements IPlantation {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  produto: string;
  @Column()
  area: string;
  @Column()
  tipo: string;

  @OneToOne(() => HarvestEntity, (harvest) => harvest.plantacao)
  safra: HarvestEntity[];
}