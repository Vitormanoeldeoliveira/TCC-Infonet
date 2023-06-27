import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IPlant {
  @Field(() => ID)
  id: number;
  @Field()
  area: number;
  @Field()
  nome: string;
  @Field()
  qtd_agua: number;
  @Field()
  qtd_calcario: number;
  @Field()
  qtd_adubo: number;
  @Field()
  qtd_insumos: number;
}