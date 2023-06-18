import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProductUpdateInput {
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