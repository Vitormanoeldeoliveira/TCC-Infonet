import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StateEntity } from './Entities/State.entity';
import { StateCreateInput } from './dtos/State-create.input';
import { StateUpdateInput } from './dtos/State-update.input';

@Injectable()
export class StateService {
  constructor(
    @Inject('STATE_REPOSITORY')
    private state: Repository<StateEntity>
  ) {}

  async getAll() : Promise<StateEntity[]> {
    const state = await this.state.find();
    
    return state;
  }

  async getOne(id: number) {
    const state = await this.state.findOne({ where: {id,}, });
    
    return state;
  }

  async create(data: StateCreateInput) : Promise<StateEntity> {
    const state: any = {
      ...data,
    }
    return await this.state.save(state);
  }

  async update(
    id: number,
    data: StateUpdateInput
  ) : Promise<StateEntity> {
    const state: any = {
      ...data
    }
    return await this.state
    .createQueryBuilder()
    .update(state)
    .where('id = :id', { id })
    .returning('*')
    .updateEntity(true)
    .execute()
    .then((res) => res.raw[0])
  }

  async delete (
    id: number,
  ) {
    return await this.state.delete(id);
  }
}