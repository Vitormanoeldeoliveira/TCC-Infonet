import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StateUpdateInput {
  @Field()
  uf: string
}