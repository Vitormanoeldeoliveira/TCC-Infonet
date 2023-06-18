import { DataSource } from 'typeorm';
import { HarvestEntity } from '../Entities/harvest.entity';

export const harvestProvider = [
  {
    provide: 'HARVEST_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(HarvestEntity),
    inject: ['DataSource'],
  },
];
