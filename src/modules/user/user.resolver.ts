import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './dtos/user.model';
import { UserCreateInput } from './dtos/user-create.input';
import { UserUpdateInput } from './dtos/user-update.input';

@Resolver()
export class UserResolver {
  constructor(private service : UserService ) {}

  @Query(() => [User])
  async getAllUsers() : Promise<User[]> {
    return await this.service.getAll()
  }

  @Query(() => User) 
  async getOneUser(
    @Args('id') id:number
  ) : Promise<User> {
    return await this.service.getOne(id)
  }

  @Mutation(() => User)
  async createUser(
    @Args('user') data: UserCreateInput
  ) : Promise<User> {
    return await this.service.create(data)
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id')
    id: number,
    @Args('user') 
    data: UserUpdateInput
  ) : Promise<User> {
    return await this.service.update(id, data)
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('id')
    id: number,
  ) {
    return await this.service.delete(id)
  }
}
