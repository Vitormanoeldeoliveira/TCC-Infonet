import { Inject, Injectable } from '@nestjs/common';
import { PlantationEntity } from './Entities/plantation.entity';
import { Repository } from 'typeorm';
import { PlantationCreateInput } from './dtos/plantation-create.input';
import { PlantationUpdateInput } from './dtos/plantation-update.input';

@Injectable()
export class PlantationService {
  constructor(
    @Inject('PLANTATION_REPOSITORY')
    private plantation: Repository<PlantationEntity>
  ) {}

  async getAll() : Promise<PlantationEntity[]> {
    const plantations = await this.plantation.find();
    
    return plantations;
  }

  async getOne(id: number) {
    const plantation = await this.plantation.findOne({ where: {id,}, });
    
    return plantation;
  }

  async create(data: PlantationCreateInput) : Promise<PlantationEntity> {
    const plantation: any = {
      ...data,
    }
    return await this.plantation.save(plantation);
  }

  async update(
    id: number,
    data: PlantationUpdateInput
  ) : Promise<PlantationEntity> {
    const plantation: any = {
      ...data
    }
    return await this.plantation
    .createQueryBuilder()
    .update(plantation)
    .where('id = :id', { id })
    .returning('*')
    .updateEntity(true)
    .execute()
    .then((res) => res.raw[0])
  }

  async delete (
    id: number,
  ) {
    return await this.plantation.delete(id);
  }
}