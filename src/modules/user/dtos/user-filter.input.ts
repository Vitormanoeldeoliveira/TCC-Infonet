import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class UserFilterInput {
    @Field({nullable: true})
    id?: number;
    @Field({ nullable: true })
    email?: string;
    @Field({ nullable: true })
    senha?: string;
    @Field({ nullable: true })
    nome?: string;
    @Field({ nullable: true })
    excluido?: boolean
}
