import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EmailValidateUpdateInput {
  @Field({ nullable: true })
  codigo: string;
  @Field({ nullable: true })
  valido: boolean;
}