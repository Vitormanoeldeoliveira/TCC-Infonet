import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CityUpdateInput {
  @Field()
  nome: string;
  @Field()
  cep: number;
  @Field(() => Int)
  id_estado: number;
}