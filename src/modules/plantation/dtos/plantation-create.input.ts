import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PlantationCreateInput {
  @Field()
  produto: string;
  @Field()
  area: string;
  @Field()
  tipo: string;
}