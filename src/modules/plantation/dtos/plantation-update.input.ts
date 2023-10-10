import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PlantationUpdateInput {
  @Field()
  descricao: string;
  @Field()
  area: number;
  @Field()
  tipo: string;
  @Field({ nullable: true })
  cep: number;
  @Field(({ nullable: true }))
  cidade: string;
  @Field({ nullable: true })
  uf: string

  @Field()
  id_usuario: number;
  @Field()
  id_cidade: number;
  @Field()
  id_planta: number;

  @Field({ defaultValue: false })
  excluido: boolean;
}