import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class HarvestExpenseUpdateInput {
  @Field()
  id: number;
  @Field()
  preco_adubo: number;
  @Field()
  preco_insumos: number;
  @Field()
  preco_calcario: number;
  @Field()
  valor_inicial: number;
  
  @Field(() => Int)
  id_safra: number;
}