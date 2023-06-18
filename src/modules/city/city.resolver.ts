import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './dtos/city.model';
import { CityCreateInput } from './dtos/city-create.inuput';
import { CityUpdateInput } from './dtos/city-update.input';

@Resolver()
export class CityResolver {
  constructor(private readonly service: CityService) {}
  
  @Query(() => [City])
  async getAllCity() : Promise<City[]> {
    return this.service.getAll()
  }

  @Query(() => City)
  async getOneCity(
    @Args('id') id:number,
  ) : Promise<City> {
    return this.service.getOne(id)
  }

  @Mutation(() => City)
  async createCity(
    @Args('city') data: CityCreateInput,
  ) : Promise<City> {
    return await this.service.create(data)
  }

  @Mutation(() => City)
  async updateCity(
    @Args('id') id: number,
    @Args('city') data: CityUpdateInput,
  ) : Promise<City> {
    return this.service.update(id, data)
  }

  @Mutation(() => City)
  async deleteCity(
    @Args('id') id: number,
  ) {
    return this.service.delete(id)
  }
}
