import { DataSource } from 'typeorm';
import { StateEntity } from '../Entities/State.entity';

export const StateProvider = [
  {
    provide: 'STATE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(StateEntity),
    inject: ['DataSource'],
  },
];
