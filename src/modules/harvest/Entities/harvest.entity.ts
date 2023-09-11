import { 
  Column,
  Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn
} from "typeorm";
import { IHarvest } from "../Interface/harvest.interface";
import { PlantationEntity } from "src/modules/plantation/Entities/plantation.entity";
import { HarvestExpenseEntity } from "src/modules/harvest-expense/Entities/harvestExpense.entity";
import { ProfitEntity } from "src/modules/profit/Entities/profit.entity";

@Entity('safra')
export class HarvestEntity implements IHarvest {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  // @Column()
  // tipo: string;
  @Column()
  data_safra: Date;

  @Column()
  id_plantacao: number;

  @Column()
  excluido: boolean;
  
  @ManyToOne(
    () => PlantationEntity,
    (plantation) => plantation.safra,
  )
  @JoinColumn({
    name: 'id_plantacao',
    referencedColumnName: 'id',
  })
  plantacao: PlantationEntity;

  @OneToOne(() => HarvestExpenseEntity, (harvestExpense) => harvestExpense.custoSafra)
  safraCusto: HarvestExpenseEntity[];

  @OneToOne(() => ProfitEntity, (profit) => profit.lucroSafra)
  safraLucro: ProfitEntity[];
}