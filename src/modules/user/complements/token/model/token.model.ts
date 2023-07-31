import { Field, ObjectType } from '@nestjs/graphql';
import { IToken } from '../Interface/token.interface';

@ObjectType({ implements: IToken })
export class Token extends IToken {}

