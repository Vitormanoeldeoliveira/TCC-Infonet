import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class HarvestUpdateInput {
  @Field()
  periodo: string;
  @Field(() => Int)
  id_plantacao: number;
}