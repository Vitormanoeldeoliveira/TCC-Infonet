import { Field, ObjectType } from '@nestjs/graphql';
import { IProfit } from '../interface/profit.interface';
import { Harvest } from 'src/modules/harvest/dtos/harvest.model';
import { HarvestExpense } from 'src/modules/harvest-expense/dtos/harvestExpense.model';
import { User } from 'src/modules/user/dtos/user.model';

@ObjectType({ implements: IProfit })
export class Profit extends IProfit {
  @Field({ nullable: true })
  lucroSafra: Harvest;
  @Field({ nullable: true })
  lucroGasto: HarvestExpense;
  @Field({ nullable: true })
  usuario: User;
}

