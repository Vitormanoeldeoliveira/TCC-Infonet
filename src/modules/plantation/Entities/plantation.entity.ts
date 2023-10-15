import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPlantation } from "../Interface/plantation.interface";
import { HarvestEntity } from "src/modules/harvest/Entities/harvest.entity";
import { UserEntity } from "src/modules/user/Entities/user.entity";
import { CityEntity } from "src/modules/city/Entities/city.entity";
import { PlantEntity } from "src/modules/plant/Entities/plant.entity";

@Entity('plantacao')
export class PlantationEntity implements IPlantation {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  @Column()
  area: number;
  @Column()
  tipo: string;
  @Column()
  cep: string;
  @Column()
  cidade: string;
  @Column()
  uf: string;

  @Column()
  id_usuario: number;
  // @Column()
  // id_cidade: number;
  @Column()
  id_planta: number;

  @Column()
  created_at: Date;

  @Column()
  excluido: boolean;

  @ManyToOne(
    () => UserEntity,
    (user) => user.plantacao,
  )
  @JoinColumn({
    name: 'id_usuario',
    referencedColumnName: 'id',
  })
  usuario: UserEntity;

  @ManyToOne(
    () => PlantEntity,
    (plant) => plant.plantacao,
  )
  @JoinColumn({
    name: 'id_planta',
    referencedColumnName: 'id',
  })
  planta: PlantEntity;

  @OneToMany(() => HarvestEntity, (harvest) => harvest.plantacao)
  safra: HarvestEntity[];
}