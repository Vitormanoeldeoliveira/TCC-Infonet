import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IPlant } from "../interface/plant.interface";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";
import { UserEntity } from "src/modules/user/Entities/user.entity";

@Entity('planta')
export class PlantEntity implements IPlant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  @Column('float')
  area: number;
  @Column()
  nome: string;
  @Column()
  qtd_agua: number;
  @Column()
  qtd_calcario: number;
  @Column()
  qtd_adubo: number;
  @Column('float')
  qtd_insumos: number;

  @Column()
  id_usuario: number;

  @ManyToOne(
    () => UserEntity,
    (user) => user.planta,
  )
  @JoinColumn({
    name: 'id_usuario',
    referencedColumnName: 'id',
  })
  usuario: UserEntity;

  @OneToMany(() => PlantationEntity, (plantation) => plantation.planta)
  plantacao: [];
}