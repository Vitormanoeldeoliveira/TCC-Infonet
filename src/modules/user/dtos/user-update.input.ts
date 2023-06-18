import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserUpdateInput {
  @Field()
  nome: string;
  @Field()
  email: string;
  @Field()
  senha: string;
}