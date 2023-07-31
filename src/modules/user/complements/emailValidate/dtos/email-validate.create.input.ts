import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EmailValidateCreateInput {
  @Field({ nullable: true })
  codigo: string;
  @Field({ nullable: true })
  valido: boolean;
}