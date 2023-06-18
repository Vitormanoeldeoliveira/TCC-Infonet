import { Field, ObjectType } from '@nestjs/graphql';
import { IUser } from '../Interface/user.interface';

@ObjectType({ implements: IUser })
export class User extends IUser {}

