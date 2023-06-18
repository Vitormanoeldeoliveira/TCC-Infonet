import { Field, ID, Int, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class ICity {
  @Field(() => ID)
  id: number;
  @Field()
  nome: string;
  @Field()
  cep: number;
  @Field(() => Int)
  id_estado: number;
}