import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './Entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreateInput } from './dtos/user-create.input';
import { UserUpdateInput } from './dtos/user-update.input';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private users: Repository<UserEntity>
  ) {}

  async getAll() : Promise<UserEntity[]> {
    const users = await this.users.find();
    
    return users;
  }

  async getOne(id: number) {
    const user = await this.users.findOne({ where: {id,}, });
    
    return user;
  }

  async create(data: UserCreateInput) : Promise<UserEntity> {
    const user: any = {
      ...data,
    }
    return await this.users.save(user);
  }

  async update(
    id: number,
    data: UserUpdateInput
  ) : Promise<UserEntity> {
    const user: any = {
      ...data
    }
    return await this.users
    .createQueryBuilder()
    .update(user)
    .where('id = :id', { id })
    .returning('*')
    .updateEntity(true)
    .execute()
    .then((res) => res.raw[0])
  }

  async delete (
    id: number,
  ) {
    return await this.users.delete(id);
  }
}
