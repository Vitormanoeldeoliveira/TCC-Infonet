import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from './Entities/product.entity';
import { Repository } from 'typeorm';
import { ProductCreateInput } from './dtos/product-create.input';
import { ProductUpdateInput } from './dtos/product-update.input';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private product: Repository<ProductEntity>
  ) {}

  async getAll() : Promise<ProductEntity[]> {
    const product = await this.product.find();
    
    return product;
  }

  async getOne(id: number) {
    const product = await this.product.findOne({ where: {id,}, });
    
    return product;
  }

  async create(data: ProductCreateInput) : Promise<ProductEntity> {
    const product: any = {
      ...data,
    }
    return await this.product.save(product);
  }

  async update(
    id: number,
    data: ProductUpdateInput
  ) : Promise<ProductEntity> {
    const product: any = {
      ...data
    }
    return await this.product
    .createQueryBuilder()
    .update(product)
    .where('id = :id', { id })
    .returning('*')
    .updateEntity(true)
    .execute()
    .then((res) => res.raw[0])
  }

  async delete (
    id: number,
  ) {
    return await this.product.delete(id);
  }
}