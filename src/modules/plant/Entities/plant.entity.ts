import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IPlant } from "../interface/plant.interface";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";

@Entity('planta')
export class PlantEntity implements IPlant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  area: number;
  @Column()
  nome: string;
  @Column()
  qtd_agua: number;
  @Column()
  qtd_calcario: number;
  @Column()
  qtd_adubo: number;
  @Column()
  qtd_insumos: number;

  @OneToMany(() => PlantationEntity, (plantation) => plantation.planta)
  plantacao: [];
}