import { Field, ObjectType } from '@nestjs/graphql';
import { IPlant } from '../interface/plant.interface';
import { User } from 'src/modules/user/dtos/user.model';

@ObjectType({ implements: IPlant })
export class Plant extends IPlant {
  @Field({ nullable: true })
  usuario: User;
}

