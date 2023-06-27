import { DataSource } from 'typeorm';
import { HarvestExpenseEntity } from '../Entities/harvestExpense.entity';

export const harvestExpenseProvider = [
  {
    provide: 'HARVESTEXPENSE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(HarvestExpenseEntity),
    inject: ['DataSource'],
  },
];
