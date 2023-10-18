import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/modules/user/dtos/user.model';
import { IState } from '../Interface/State.interface';

@ObjectType({ implements: IState })
export class State extends IState {
    @Field({ nullable: true })
    usuario: User;
}

