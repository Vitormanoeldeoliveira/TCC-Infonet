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
  @Field({ nullable: true })
  cep: number;
  @Field(({ nullable: true }))
  cidade: string;
  @Field({ nullable: true })
  uf: string

  @Field()
  id_usuario: number;
  @Field()
  id_planta: number;

  @Field()
  created_at: Date;

  @Field({ defaultValue: false })
  excluido: boolean;
}