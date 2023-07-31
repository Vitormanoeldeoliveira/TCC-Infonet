import { Inject, Injectable } from '@nestjs/common';
import { HarvestEntity } from './Entities/harvest.entity';
import { ILike, Repository } from 'typeorm';
import { HarvestCreateInput } from './dtos/harvest-create.input';
import { HarvestUpdateInput } from './dtos/harvest-update.input';
import { HarvestFilterInput } from './dtos/harvest-filter.input';

@Injectable()
export class HarvestService {
  constructor(
    @Inject('HARVEST_REPOSITORY')
    private readonly harvest: Repository<HarvestEntity>
  ) {}

  async getAll(
    filters: HarvestFilterInput
  ) : Promise<HarvestEntity[]> {
    const harvests = await this.harvest.find({
      relations:{ 
        plantacao: true 
      },
      where: {
        ...filters.id_plantacao && { id_plantacao: filters.id_plantacao },
        ...filters.descricao && { descricao:  ILike(`%${filters.descricao}%`) }
      } 
    });

    return harvests;
  }

  async getOne(
    id: number,
    // filters: HarvestFilterInput
  ) : Promise<HarvestEntity> {
    const harvest = await this.harvest.findOne({ 
      relations:{ plantacao:true }, 
      where: {
        id,
        // ...filters.id_plantacao && { id_plantacao: filters.id_plantacao }
      }, 
    })

    return harvest
  }

  async create(data: HarvestCreateInput) : Promise<HarvestEntity> {
    const harvest: any = {
      ...data
    }

    return await this.harvest.save(harvest);
  }

  async update(id: number, data: HarvestUpdateInput) : Promise<HarvestEntity> {
    const harvest: any = {
      ...data
    }

    return await this.harvest
      .createQueryBuilder()
      .update(harvest)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute()
      .then((res) => res.raw[0])
  }

  async delete(id: number) {
    this.harvest.delete(id);
  }
}
