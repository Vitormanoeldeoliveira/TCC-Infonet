import { Field, ObjectType } from '@nestjs/graphql';
import { IPlant } from '../interface/plant.interface';

@ObjectType({ implements: IPlant })
export class Plant extends IPlant {}

