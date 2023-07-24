import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HarvestExpenseService } from './harvest-expense.service';
import { HarvestExpense } from './dtos/harvestExpense.model';
import { HarvestExpenseCreateInput } from './dtos/harvestExpense-create.input';
import { HarvestExpenseUpdateInput } from './dtos/harvestExpense-update.input';
import { HarvestExpenseFilterInput } from './dtos/harvestExpense-filter.input';

@Resolver()
export class HarvestExpenseResolver {
  constructor(private service : HarvestExpenseService ) {}

  @Query(() => [HarvestExpense])
  async getAllHarvestExpense(
    @Args('filters')
    filters: HarvestExpenseFilterInput
  ) : Promise<HarvestExpense[]> {
    return await this.service.getAll(filters);
  }

  @Query(() => HarvestExpense)
  async getOneHarvestExpense(
    @Args('id') id: number
  ) : Promise<HarvestExpense> {
    return await this.service.getOne(id)
  }

  @Mutation(() => HarvestExpense)
  async createHarvestExpense(
    @Args('harvestExpense') data: HarvestExpenseCreateInput
  ) : Promise<HarvestExpense> {
    return await this.service.create(data)
  }

  @Mutation(() => HarvestExpense)
  async updateHarvestExpense(
    @Args('id') id: number,
    @Args("harvestExpense") data: HarvestExpenseUpdateInput
  ) : Promise<HarvestExpense> {
    return await this.service.update(id, data)
  }

  @Mutation(() => HarvestExpense)
  async deleteHarvestExpense(
    @Args('id') id: number
  ) {
    this.service.delete(id)
  }
}
