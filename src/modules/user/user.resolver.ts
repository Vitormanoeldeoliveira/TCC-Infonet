import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './dtos/user.model';
import { UserCreateInput } from './dtos/user-create.input';
import { UserUpdateInput } from './dtos/user-update.input';
import { UserFilterInput } from './dtos/user-filter.input';

import { JwtService } from '@nestjs/jwt/dist';
import { Token } from './complements/token/model/token.model';
import { UserValidateEmailInput } from './complements/emailValidate/dtos/email-validate.input';

@Resolver()
export class UserResolver {
  constructor(
    private service : UserService,
    private JWTService: JwtService
  ) {}

  @Query(() => [User])
  async getAllUsers(
    @Args('filters') filters: UserFilterInput
  ) : Promise<User[]> {
    return await this.service.getAll(filters)
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
  ) {
    return await this.service.update(id, data)
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('id')
    id: number,
  ) {
    return await this.service.delete(id)
  }

  @Query(() => Token)
  async login(
    @Args('filters')
    filters: UserFilterInput
  ) {
    const user = await this.service.login(filters)
    
    if(user){
      const newToken = await this.JWTService.signAsync(
        {
          id: user.id,
          nome: user.nome,
          email: user.email,
          avatar: user.avatar
        }
      );

      const tokens = {
        token: newToken
      }
      
      return tokens;
    }
    
    return null
  };

  @Query(() => User)
  async changePassword(
    @Args('filters')
    filters: UserFilterInput
  ) {
    return await this.service.login(filters)
  }

  @Query(() => Token)
  async updateLogin(
    @Args('filters')
    filters: UserFilterInput
  ) {
    const data = filters.id
    const user = await this.service.getOne(data)
    
    if(user){
      const newToken = await this.JWTService.signAsync(
        {
          id: user.id,
          nome: user.nome,
          email: user.email,
          avatar: user.avatar
        }
      );

      const tokens = {
        token: newToken
      }
      
      return tokens;
    }
  }

  // @Mutation(() => User)
  // async SendEmailValidate(
  //   @Args('filters')
  //   filters: UserValidateEmailInput
  // ) {
  //   return this.service.validate(filters)
  // }
}
