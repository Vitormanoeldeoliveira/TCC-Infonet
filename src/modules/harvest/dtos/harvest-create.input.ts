import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class HarvestCreateInput {
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