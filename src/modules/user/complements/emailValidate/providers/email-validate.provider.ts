import { DataSource } from 'typeorm';
import { EmailValidateEntity } from '../Entities/email-validate.entity';

export const EmailValidateProvider = [
  {
    provide: 'EMAILVALIDATE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(EmailValidateEntity),
    inject: ['DataSource'],
  },
];
