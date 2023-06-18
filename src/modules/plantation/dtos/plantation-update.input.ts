import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PlantationUpdateInput {
  @Field()
  produto: string;
  @Field()
  area: string;
  @Field()
  tipo: string;
}