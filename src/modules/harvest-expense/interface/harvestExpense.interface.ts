import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IHarvestExpense {
  @Field(() => ID)
  id: number;
  @Field()
  preco_adubo: number;
  @Field()
  preco_insumos: number;
  @Field()
  preco_calcario: number;
  @Field()
  valor_inicial: number;
  @Field()
  hora_trabalho: number;
  @Field()
  hora_trabalhada: number
  
  @Field()
  id_safra: number;
}