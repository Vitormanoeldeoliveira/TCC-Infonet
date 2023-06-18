import { DataSource } from 'typeorm';
import { PlantationEntity } from '../Entities/plantation.entity';

export const plantationProvider = [
  {
    provide: 'PLANTATION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(PlantationEntity),
    inject: ['DataSource'],
  },
];
