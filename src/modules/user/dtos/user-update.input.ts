import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  nome: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  senha: string;
  @Field({ nullable: true })
  avatar: string;
  @Field({ nullable: true, defaultValue: false })
  excluido: boolean;
}