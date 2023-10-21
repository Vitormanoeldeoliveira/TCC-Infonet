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
  cep: string;
  @Field()
  cidade: string;
  @Field()
  uf: string;

  @Field()
  id_usuario: number;
  @Field()
  id_planta: number;

  @Field({ defaultValue: false })
  excluido: boolean;
}