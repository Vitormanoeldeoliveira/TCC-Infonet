import { DataSource } from 'typeorm';
import { PlantEntity } from '../Entities/plant.entity';

export const plantProvider = [
  {
    provide: 'PLANT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(PlantEntity),
    inject: ['DataSource'],
  },
];
