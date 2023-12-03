import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HarvestService } from './harvest.service';
import { Harvest } from './dtos/harvest.model';
import { HarvestCreateInput } from './dtos/harvest-create.input';
import { HarvestUpdateInput } from './dtos/harvest-update.input';
import { HarvestFilterInput } from './dtos/harvest-filter.input';

@Resolver()
export class HarvestResolver {
  constructor(private service: HarvestService) {}

  @Query(() => [Harvest])
  async getAllHarvests(
    @Args('filters')
    filters: HarvestFilterInput
  ) : Promise<Harvest[]> {
    return await this.service.getAll(filters)
  };

  @Query(() => [Harvest])
  async getAllHarvestsSuport() : Promise<Harvest[]> {
    return await this.service.getAllSuport()
  };

  @Query(() => Harvest)
  async getOneHarvest(
    @Args('id') id: number,
    // @Args('filters')
    // filters: HarvestFilterInput
  ) : Promise<Harvest> {
    return await this.service.getOne(
      id, 
      // filters
    )
  }

  @Mutation(() => Harvest)
  async createHarvest(
    @Args('harvest') data: HarvestCreateInput,
  ) : Promise<Harvest> {
    return await this.service.create(data)
  }

  @Mutation(() => Harvest)
  async updateHarvest(
    @Args('id') id: number,
    @Args('harvest') data: HarvestUpdateInput,
  ) : Promise<Harvest> {
    return await this.service.update(id, data)
  }

  @Mutation(() => Harvest)
  async deleteHarvest(
    @Args('id') id: number,
  ) {
    return await this.service.delete(id)
  }
}
