import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlantService } from './plant.service';
import { Plant } from './dtos/plant.model';
import { PlantCreateInput } from './dtos/plant-create.input';
import { PlantUpdateInput } from './dtos/plant-update.input';
import { PlantFilterInput } from './dtos/plant-filter.input';

@Resolver()
export class PlantResolver {
  constructor(private service : PlantService ) {}

  @Query(() => [Plant])
  async getAllPlant(
    @Args('filters')
    filters: PlantFilterInput
  ) : Promise<Plant[]> {
    return await this.service.getAll(filters)
  }

  @Query(() => Plant)
  async getOnePlant(
    @Args('id') id: number
  ) : Promise<Plant> {
    return await this.service.getOne(id)
  }

  @Mutation(() => Plant)
  async createPlant(
    @Args('plant') data: PlantCreateInput
  ) : Promise<Plant> {
    return await this.service.create(data);
  }

  @Mutation(() => Plant)
  async updatePlant(
    @Args('id') id: number,
    @Args('plant') data: PlantUpdateInput
  ) : Promise<Plant> {
    return await this.service.update(id, data)
  }

  @Mutation(() => Plant) 
  async deletePlant(
    @Args('id') id: number
  ) {
    return await this.service.delete(id)
  }
}
