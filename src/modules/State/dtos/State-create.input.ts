import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StateCreateInput {
  @Field()
  uf: string;
}