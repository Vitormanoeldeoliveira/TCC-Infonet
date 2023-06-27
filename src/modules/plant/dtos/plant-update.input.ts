import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PlantUpdateInput {
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