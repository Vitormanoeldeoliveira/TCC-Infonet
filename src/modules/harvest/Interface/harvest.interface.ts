import { Field, ID, Int, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IHarvest {
  @Field(() => ID)
  id: number;
  @Field()
  periodo: string;
  @Field(() => Int)
  id_plantacao: number;
}