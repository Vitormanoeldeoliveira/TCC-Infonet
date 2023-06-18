import { Field, ObjectType } from '@nestjs/graphql';
import { IState } from '../Interface/State.interface';

@ObjectType({ implements: IState })
export class State extends IState {}

