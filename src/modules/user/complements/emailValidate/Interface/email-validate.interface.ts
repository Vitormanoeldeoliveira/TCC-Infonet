import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export class IEmailValidate {
  @Field(() => ID)
  id: number;
  @Field()
  codigo: string;
  @Field()
  valido: boolean;
}