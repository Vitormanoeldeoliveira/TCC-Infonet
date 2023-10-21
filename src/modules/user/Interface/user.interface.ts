import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IUser {
  @Field(() => ID)
  id: number;
  @Field()
  nome: string;
  @Field()
  email: string;
  @Field()
  senha: string;
  @Field()
  avatar: string;
  @Field({ defaultValue: false })
  excluido: boolean
}