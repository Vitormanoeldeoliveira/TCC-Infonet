import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class PlantFilterInput {
    @Field(() => Int, { nullable: true })
    id_usuario?: number;

    @Field({ nullable: true })
    descricao?: string;
}
