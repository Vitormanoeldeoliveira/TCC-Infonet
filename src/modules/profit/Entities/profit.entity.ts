import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { HarvestEntity } from "src/modules/harvest/Entities/harvest.entity";
import { IProfit } from "../interface/profit.interface";
import { HarvestExpenseEntity } from "src/modules/harvest-expense/Entities/harvestExpense.entity";
import { UserEntity } from "src/modules/user/Entities/user.entity";

@Entity('lucro')
export class ProfitEntity implements IProfit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  qtd_venda: number;
  @Column('float')
  valor_venda: number;
  @Column()
  periodo_venda: Date;

  @Column()
  id_safra: number;
  @Column()
  id_gasto: number;
  @Column()
  id_usuario: number;
  
  @Column()
  excluido: boolean;
  
  @OneToOne(
    () => HarvestEntity,
    (harvest) => harvest.safraLucro,
  )
  @JoinColumn({
    name: 'id_safra',
    referencedColumnName: 'id',
  })
  lucroSafra: HarvestEntity;

  @OneToOne(
    () => HarvestExpenseEntity,
    (harvestExpense) => harvestExpense.gastoLucro,
  )
  @JoinColumn({
    name: 'id_gasto',
    referencedColumnName: 'id',
  })
  lucroGasto: HarvestExpenseEntity;

  @ManyToOne(
    () => UserEntity,
    (user) => user.lucro,
  )
  @JoinColumn({
    name: 'id_usuario',
    referencedColumnName: 'id',
  })
  usuario: UserEntity;
}