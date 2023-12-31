import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProfitEntity } from './Entities/profit.entity';
import { ProfitCreateInput } from './dtos/profit-create.input';
import { ProfitUpdateInput } from './dtos/profit-update.input';
import { ProfitFilterInput } from './dtos/profit-filter.input';

@Injectable()
export class ProfitService {
  constructor(
    @Inject('PROFIT_REPOSITORY')
    private profit: Repository<ProfitEntity>
  ) {}

  async getAll(
    filters: ProfitFilterInput
  ) : Promise<ProfitEntity[]> {
    const profit = await this.profit.find({ 
      relations: {
        lucroSafra: {
          plantacao: true
        },
        lucroGasto: true,
      },
      where: {
        ...filters.id_safra && { id_safra: filters.id_safra },
        ...filters.id_usuario && { id_usuario: filters.id_usuario },
        excluido: filters.excluido
      }
    });

    return profit;
  };

  async getOne(id: number) : Promise<ProfitEntity> {
    const profit = await this.profit.findOne({ 
      relations: {
        lucroSafra: true,
        lucroGasto: true,
        usuario: true,
      }, 
      where: {id} })
    return profit;
  };

  async create(data: ProfitCreateInput) : Promise<ProfitEntity> {
    
    const profit: any = {
      ...data
    }
    return await this.profit.save(profit)
  };

  async update(id: number, data: ProfitUpdateInput) : Promise<ProfitEntity> {
    const profit: any = {
      ...data
    }
    return await this.profit
      .createQueryBuilder()
      .update(profit)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute()
      .then((res) => res.raw[0])
  };

  async delete(id: number) {
    return await this.profit.delete(id)
  }
}
