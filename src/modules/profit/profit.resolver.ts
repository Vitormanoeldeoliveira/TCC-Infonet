import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProfitService } from './profit.service';
import { Profit } from './dtos/profit.model';
import { ProfitCreateInput } from './dtos/profit-create.input';
import { ProfitUpdateInput } from './dtos/profit-update.input';

@Resolver()
export class ProfitResolver {
  constructor(private service : ProfitService ) {}

  @Query(() => [Profit])
  async getAllProfit() : Promise<Profit[]> {
    return await this.service.getAll();
  }

  @Query(() => Profit)
  async getOneProfit(
    @Args('id') id: number
  ) : Promise<Profit> {
    return await this.service.getOne(id)
  }

  @Mutation(() => Profit)
  async createProfit(
    @Args('Profit') data: ProfitCreateInput
  ) : Promise<Profit> {
    return await this.service.create(data)
  }

  @Mutation(() => Profit)
  async updateProfit(
    @Args('id') id: number,
    @Args("Profit") data: ProfitUpdateInput
  ) : Promise<Profit> {
    return await this.service.update(id, data)
  }

  @Mutation(() => Profit)
  async deleteProfit(
    @Args('id') id: number
  ) {
    this.service.delete(id)
  }
}
