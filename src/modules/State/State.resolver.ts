import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StateService } from './State.service';
import { State } from './dtos/State.model';
import { StateCreateInput } from './dtos/State-create.input';
import { StateUpdateInput } from './dtos/State-update.input';

@Resolver()
export class StateResolver {
  constructor(private service : StateService ) {}

  @Query(() => [State])
  async getAllStates() : Promise<State[]> {
    return await this.service.getAll()
  }

  @Query(() => State) 
  async getOneState(
    @Args('id') id:number
  ) : Promise<State> {
    return await this.service.getOne(id)
  }

  @Mutation(() => State)
  async createState(
    @Args('state') data: StateCreateInput
  ) : Promise<State> {
    return await this.service.create(data)
  }

  @Mutation(() => State)
  async updateState(
    @Args('id')
    id: number,
    @Args('state') 
    data: StateUpdateInput
  ) : Promise<State> {
    return await this.service.update(id, data)
  }

  @Mutation(() => State)
  async deleteState(
    @Args('id')
    id: number,
  ) {
    return await this.service.delete(id)
  }
}