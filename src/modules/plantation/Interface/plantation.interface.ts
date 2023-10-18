import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IPlantation {
  @Field(() => ID)
  id: number;
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

  @Field()
  created_at: Date;

  @Field({ defaultValue: false })
  excluido: boolean;
}