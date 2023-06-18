import { DataSource } from 'typeorm';
import { UserEntity } from '../Entities/user.entity';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(UserEntity),
    inject: ['DataSource'],
  },
];
