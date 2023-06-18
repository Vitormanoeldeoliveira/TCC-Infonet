import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IProduct {
  @Field(() => ID)
  id: number;
  @Field()
  espaco: number;
  @Field()
  qtd_agua: number;
  @Field()
  adubo: boolean;
  @Field({ nullable:true })
  qtd_adubo: number;
  @Field()
  calcario: boolean;
  @Field({ nullable:true })
  qtd_calcario: number;
  @Field()
  insumos: boolean;
  @Field({ nullable:true })
  qtd_insumos: number;
  @Field()
  qtd_sementes: number;
}