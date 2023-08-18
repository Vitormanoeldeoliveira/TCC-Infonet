import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PlantationCreateInput {
  @Field()
  descricao: string;
  @Field()
  area: number;
  @Field()
  tipo: string;

  @Field()
  id_usuario: number;
  @Field()
  id_cidade: number;
  @Field()
  id_planta: number;
}