import { Inject, Injectable } from '@nestjs/common';
import { PlantEntity } from './Entities/plant.entity';
import { Repository } from 'typeorm';
import { PlantCreateInput } from './dtos/plant-create.input';
import { PlantUpdateInput } from './dtos/plant-update.input';

@Injectable()
export class PlantService {
  constructor(
    @Inject('PLANT_REPOSITORY')
    private plant: Repository<PlantEntity>
  ) {}

  async getAll() : Promise<PlantEntity[]> {
    const plant = await this.plant.find();

    return plant;
  };

  async getOne(id: number) : Promise<PlantEntity> {
    const plant = await this.plant.findOne({ where: {id} })

    return plant;
  };

  async create(data: PlantCreateInput) : Promise<PlantEntity> {
    const plant: any = {
      ...data
    }
    return await this.plant.save(plant)
  };

  async update(id: number, data: PlantUpdateInput) : Promise<PlantEntity> {
    const plant: any = {
      ...data
    }
    return await this.plant
      .createQueryBuilder()
      .update(plant)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute()
      .then((res) => res.raw[0])
  };

  async delete(id: number) {
    return await this.plant.delete(id)
  }
}
