import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field()
  nome: string;
  @Field()
  email: string;
  @Field()
  senha: string;
  @Field()
  avatar: string;
  @Field({ nullable: true, defaultValue: false })
  excluido: boolean;
}