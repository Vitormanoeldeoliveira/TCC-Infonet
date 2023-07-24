import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class HarvestExpenseFilterInput {
    @Field(() => Int, { nullable: true })
    id_safra?: number;
}
