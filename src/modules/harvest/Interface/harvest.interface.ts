import { Field, ID, Int, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IHarvest {
  @Field(() => ID)
  id: number;
  @Field()
  descricao: string;
  @Field()
  tipo: string;
  @Field()
  data_safra: Date;

  @Field(() => Int)
  id_plantacao: number;
}