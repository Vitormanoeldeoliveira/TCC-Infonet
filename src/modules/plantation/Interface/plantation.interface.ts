import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IPlantation {
  @Field(() => ID)
  id: number;
  @Field()
  produto: string;
  @Field()
  area: string;
  @Field()
  tipo: string;
}