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
<<<<<<< HEAD
  @Field()
  cep: string;
  @Field()
  cidade: string;
  @Field()
  uf: string;
=======
  @Field({ nullable: true })
  cep: number;
  @Field(({ nullable: true }))
  cidade: string;
  @Field({ nullable: true })
  uf: string
>>>>>>> e40943e0b93f722816c78ba922411165776ae528

  @Field()
  id_usuario: number;
  @Field()
  id_planta: number;

  @Field()
  created_at: Date;

  @Field({ defaultValue: false })
  excluido: boolean;
}