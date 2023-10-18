import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IProfit {
  @Field(() => ID)
  id: number;
  @Field()
  qtd_venda: number;
  @Field()
  valor_venda: number;
  @Field()
  periodo_venda: Date;

  @Field()
  id_gasto: number;
  @Field()
  id_safra: number;
  @Field()
  id_usuario: number

  
  @Field({ defaultValue: false })
  excluido: boolean;
}