import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HarvestExpenseEntity } from './Entities/harvestExpense.entity';
import { HarvestExpenseCreateInput } from './dtos/harvestExpense-create.input';
import { HarvestExpenseUpdateInput } from './dtos/harvestExpense-update.input';
import { HarvestExpenseFilterInput } from './dtos/harvestExpense-filter.input';

@Injectable()
export class HarvestExpenseService {
  constructor(
    @Inject('HARVESTEXPENSE_REPOSITORY')
    private harvestExpense: Repository<HarvestExpenseEntity>
  ) {}

  async getAll(
    filters: HarvestExpenseFilterInput
  ) : Promise<HarvestExpenseEntity[]> {
    const harvestExpense = await this.harvestExpense.find({ 
      relations: {
        custoSafra: {plantacao: true}
      },
      where: {
        ...filters.id_safra && { id_safra: filters.id_safra }
      }
    });

    return harvestExpense;
  };

  async getOne(id: number) : Promise<HarvestExpenseEntity> {
    const harvestExpense = await this.harvestExpense.findOne({ relations: {custoSafra: true}, where: {id} })

    return harvestExpense;
  };

  async create(data: HarvestExpenseCreateInput) : Promise<HarvestExpenseEntity> {
    const harvestExpense: any = {
      ...data
    }
    return await this.harvestExpense.save(harvestExpense)
  };

  async update(id: number, data: HarvestExpenseUpdateInput) : Promise<HarvestExpenseEntity> {
    const harvestExpense: any = {
      ...data
    }
    return await this.harvestExpense
      .createQueryBuilder()
      .update(harvestExpense)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute()
      .then((res) => res.raw[0])
  };

  async delete(id: number) {
    return await this.harvestExpense.delete(id)
  }
}
