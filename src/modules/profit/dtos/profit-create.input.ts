import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ProfitCreateInput {
  @Field()
  qtd_venda: number;
  @Field()
  valor_venda: number;
  @Field()
  periodo_venda: Date;
  
  @Field(() => Int)
  id_safra: number;
  @Field()
  id_gasto: number;
}