import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IState } from "../Interface/State.interface";
import { CityEntity } from "src/modules/city/Entities/city.entity";
import { UserEntity } from "src/modules/user/Entities/user.entity";

@Entity('estado')
export class StateEntity implements IState {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  uf: string;
  @Column()
  id_usuario: number;

  @ManyToMany(
    () => UserEntity,
    (user) => user.estado,
  )
  @JoinColumn({
    name: 'id_usuario',
    referencedColumnName: 'id',
  })
  usuario: UserEntity;

  @OneToOne(() => CityEntity, (city) => city.estado)
  cidade: CityEntity
}