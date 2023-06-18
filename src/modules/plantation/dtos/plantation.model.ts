import { Field, ObjectType } from '@nestjs/graphql';
import { IPlantation } from '../Interface/plantation.interface';

@ObjectType({ implements: IPlantation })
export class Plantation extends IPlantation {}

