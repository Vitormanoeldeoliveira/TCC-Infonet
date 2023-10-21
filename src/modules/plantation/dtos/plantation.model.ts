import { Field, ObjectType } from '@nestjs/graphql';
import { IPlantation } from '../Interface/plantation.interface';
import { User } from 'src/modules/user/dtos/user.model';
import { City } from 'src/modules/city/dtos/city.model';
import { Plant } from 'src/modules/plant/dtos/plant.model';

@ObjectType({ implements: IPlantation })
export class Plantation extends IPlantation {
  @Field({ nullable: true })
  usuario: User;
  @Field({ nullable: true })
  planta: Plant;
}

