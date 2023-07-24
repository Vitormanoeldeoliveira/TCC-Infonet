import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class HarvestFilterInput {
    @Field(() => Int, { nullable: true })
    id_plantacao?: number;

    @Field({ nullable: true })
    descricao?: string;
}
