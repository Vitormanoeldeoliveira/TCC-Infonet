import { DataSource } from 'typeorm';
import { ProductEntity } from '../Entities/product.entity';

export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource?.getRepository(ProductEntity),
    inject: ['DataSource'],
  },
];
