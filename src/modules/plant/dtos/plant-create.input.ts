import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PlantCreateInput {
  @Field()
  descricao: string;
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

  @Field()
  id_usuario: number;
}