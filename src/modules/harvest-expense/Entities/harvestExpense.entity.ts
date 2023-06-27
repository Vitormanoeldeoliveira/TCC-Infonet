import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IHarvestExpense } from "../interface/harvestExpense.interface";
import { HarvestEntity } from "src/modules/harvest/Entities/harvest.entity";
import { ProfitEntity } from "src/modules/profit/Entities/profit.entity";

@Entity('gasto_safra')
export class HarvestExpenseEntity implements IHarvestExpense {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  preco_adubo: number;
  @Column()
  preco_insumos: number;
  @Column()
  preco_calcario: number;
  @Column()
  valor_inicial: number;
  
  @Column()
  id_safra: number;

  @OneToOne(
    () => HarvestEntity,
    (harvest) => harvest.safraCusto,
  )
  @JoinColumn({
    name: 'id_safra',
    referencedColumnName: 'id',
  })
  custoSafra: HarvestEntity;

  @OneToOne(() => ProfitEntity, (profit) => profit.lucroGasto)
  gastoLucro: ProfitEntity[];
}