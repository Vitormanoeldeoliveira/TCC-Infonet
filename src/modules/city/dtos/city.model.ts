import { Field, ObjectType } from '@nestjs/graphql';
import { ICity } from '../Interface/city.interface';
import { State } from 'src/modules/State/dtos/State.model';

@ObjectType({ implements: ICity })
export class City extends ICity {
  @Field({ nullable: true })
  estado: State;
}

