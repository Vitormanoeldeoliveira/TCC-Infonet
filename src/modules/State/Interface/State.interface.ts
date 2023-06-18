import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IState {
  @Field(() => ID)
  id: number;
  @Field()
  uf: string;
}