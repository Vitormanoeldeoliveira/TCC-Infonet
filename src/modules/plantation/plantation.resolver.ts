import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlantationService } from './plantation.service';
import { Plantation } from './dtos/plantation.model';
import { PlantationCreateInput } from './dtos/plantation-create.input';
import { PlantationUpdateInput } from './dtos/plantation-update.input';

@Resolver()
export class PlantationResolver {
  constructor(private service : PlantationService ) {}

  @Query(() => [Plantation])
  async getAllPlantations() : Promise<Plantation[]> {
    return await this.service.getAll()
  }

  @Query(() => Plantation) 
  async getOnePlantation(
    @Args('id') id:number
  ) : Promise<Plantation> {
    return await this.service.getOne(id)
  }

  @Mutation(() => Plantation)
  async createPlantation(
    @Args('plantations') data: PlantationCreateInput
  ) : Promise<Plantation> {
    return await this.service.create(data)
  }

  @Mutation(() => Plantation)
  async updatePlantation(
    @Args('id')
    id: number,
    @Args('plantations') 
    data: PlantationUpdateInput
  ) : Promise<Plantation> {
    return await this.service.update(id, data)
  }

  @Mutation(() => Plantation)
  async deletePlantation(
    @Args('id')
    id: number,
  ) {
    return await this.service.delete(id)
  }
}