import { Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class PlantationFilterInput {
    @Field(() => Int, { nullable: true })
    id_usuario?: number;

    @Field({ nullable: true })
    descricao?: string;

    @Field({ nullable: true })
    excluido?: boolean;
}
