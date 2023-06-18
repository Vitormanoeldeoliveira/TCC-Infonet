import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CityCreateInput {
  @Field()
  nome: string;
  @Field()
  cep: number;
  @Field(() => Int)
  id_estado: number;
}