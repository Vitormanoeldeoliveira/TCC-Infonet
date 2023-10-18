import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class HarvestUpdateInput {
  @Field()
  descricao: string;
  // @Field()
  // tipo: string;
  @Field()
  data_safra: Date;

  @Field(() => Int)
  id_plantacao: number;

  @Field({ defaultValue: false })
  excluido: boolean;
}