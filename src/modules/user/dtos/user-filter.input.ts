import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class UserFilterInput {
    @Field({ nullable: true })
    email?: string;
    @Field({ nullable: true })
    senha?: string;
}
