import { Field, ObjectType } from '@nestjs/graphql';
import { IHarvest } from '../Interface/harvest.interface';
import { Plantation } from 'src/modules/plantation/dtos/plantation.model';

@ObjectType({ implements: IHarvest })
export class Harvest extends IHarvest {
  @Field({ nullable: true })
  plantacao: Plantation;
}

