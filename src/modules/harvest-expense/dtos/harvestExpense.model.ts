import { Field, ObjectType } from '@nestjs/graphql';
import { IHarvestExpense } from '../interface/harvestExpense.interface';
import { Harvest } from 'src/modules/harvest/dtos/harvest.model';

@ObjectType({ implements: IHarvestExpense })
export class HarvestExpense extends IHarvestExpense {
  @Field({ nullable: true })
  custoSafra: Harvest;
}

