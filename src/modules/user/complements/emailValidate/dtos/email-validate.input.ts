import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class UserValidateEmailInput {
    @Field({ nullable: true })
    email?: string;
    @Field({ nullable: true })
    verifyCode?: boolean;
}
