import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class HarvestExpenseCreateInput {
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
  
  @Field(() => Int)
  id_safra: number;
}