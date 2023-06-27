import { DataSource } from 'typeorm';
import { ProfitEntity } from '../Entities/profit.entity';

export const profitProvider = [
  {
    provide: 'PROFIT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(ProfitEntity),
    inject: ['DataSource'],
  },
];
