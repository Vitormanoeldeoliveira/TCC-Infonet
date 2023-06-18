import { Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './Entities/city.entity';
import { Repository } from 'typeorm';
import { CityCreateInput } from './dtos/city-create.inuput';
import { CityUpdateInput } from './dtos/city-update.input';

@Injectable()
export class CityService {
  constructor(
    @Inject('CITY_REPOSITORY')
    private readonly city: Repository<CityEntity>
  ) {}

  async getAll() : Promise<CityEntity[]> {
    const city = await this.city.find({relations: {estado: true}})

    return city
  }

  async getOne(id: number) : Promise<CityEntity> {
    const city = await this.city.findOne({relations: {estado: true}, where: {id}})

    return city
  }

  async create(data: CityCreateInput) : Promise<CityEntity> {
    const city: any = {
      ...data
    }

    return await this.city.save(city);
  }

  async update(id: number, data: CityUpdateInput) : Promise<CityEntity> {
    const city: any = {
      ...data
    }

    return await this.city
      .createQueryBuilder()
      .update(city)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute()
      .then((res) => res.raw[0])
  }

  async delete(id: number) {
    return await this.city.delete(id)
  }
}
