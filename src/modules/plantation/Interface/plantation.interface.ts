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
  id_usuario: number;
  @Field()
  id_cidade: number;
  @Field()
  id_planta: number;

  @Field()
  created_at: Date;
}