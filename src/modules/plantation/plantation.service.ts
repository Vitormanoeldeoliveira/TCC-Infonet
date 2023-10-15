import { Inject, Injectable } from '@nestjs/common';
import { PlantationEntity } from './Entities/plantation.entity';
import { ILike, Repository } from 'typeorm';
import { PlantationCreateInput } from './dtos/plantation-create.input';
import { PlantationUpdateInput } from './dtos/plantation-update.input';
import { PlantationFilterInput } from './dtos/plantation-filter.input';
import { HarvestService } from '../harvest/harvest.service';
import { HarvestEntity } from '../harvest/Entities/harvest.entity';

@Injectable()
export class PlantationService {
  constructor(
    @Inject('PLANTATION_REPOSITORY')
    private plantation: Repository<PlantationEntity>,
    @Inject('HARVEST_REPOSITORY')
    private harvest: Repository<HarvestEntity>,

    private harvestService: HarvestService,
  ) {}

  async getAll(
    filters: PlantationFilterInput,
  )  {
    const plantations = await this.plantation.find({ 
      relations:{ 
        usuario: true,
        planta: true 
      },
      where: {
        ...filters.id_usuario && { id_usuario: filters.id_usuario },
        ...filters.descricao && { descricao:  ILike(`%${filters.descricao}%`) },
        excluido: filters.excluido
      },
    });
    
    return plantations;
  }

  async getOne(id: number) {
    const plantation = await this.plantation.findOne({ 
      where: {id,},
      relations:{ 
        usuario: true,
        planta: true 
      },
    });
    
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
    const data: any = {
      excluido: true
    }
    const deleted = await this.plantation
      .createQueryBuilder()
      .update(data)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute()
      .then((res) => res.raw[0])

    const harvest = await this.harvest.find({
      where: {
        id_plantacao: deleted.id
      }
    });

    harvest.map(async(safra) => {
      await this.harvestService.delete(safra.id)
    })

    return deleted;
  }
}