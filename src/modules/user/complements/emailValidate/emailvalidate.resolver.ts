import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { EmailvalidateService } from './emailvalidate.service';
import { Emailvalidate } from './dtos/email-validate.model';
import { UserValidateEmailInput } from './dtos/email-validate.input';
import { EmailValidateCreateInput } from './dtos/email-validate.create.input';
import { EmailValidateUpdateInput } from './dtos/email-validate.update';

@Resolver()
export class EmailvalidateResolver {
  constructor(
    private service : EmailvalidateService,
  ) {}

  @Query(() => [Emailvalidate])
  async getAllEmailValid() : Promise<Emailvalidate[]> {
    return await this.service.getAll()
  }

  @Query(() => Emailvalidate)
  async getByCode(
    @Args('filters')
    filters: EmailValidateCreateInput
  ) {
    return await this.service.getOneByCode(filters)
  }

  @Mutation(() => Emailvalidate) 
  async createEmailValidCode(
    @Args('data')
    data: UserValidateEmailInput
  ) {
    return await this.service.create(data)
  }

  @Mutation(() => Emailvalidate)
  async updateEmailValidCode(
    @Args('id')
    id: number,
    @Args('data')
    data: EmailValidateUpdateInput,
  ) {
    return await this.service.update(id, data)
  }
}
