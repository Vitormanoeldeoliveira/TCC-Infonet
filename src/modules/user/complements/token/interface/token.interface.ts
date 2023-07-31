import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IToken {
  @Field({ nullable: true })
  token: string;
}