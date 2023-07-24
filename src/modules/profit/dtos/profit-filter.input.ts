import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class ProfitFilterInput {
    @Field(() => Int, { nullable: true })
    id_safra?: number;
}
