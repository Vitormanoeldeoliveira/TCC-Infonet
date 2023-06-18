import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field()
  nome: string;
  @Field()
  email: string;
  @Field()
  senha: string;
}