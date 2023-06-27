import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class HarvestCreateInput {
  @Field()
  tipo: string;
  @Field()
  data_safra: Date;

  @Field(() => Int)
  id_plantacao: number;
}