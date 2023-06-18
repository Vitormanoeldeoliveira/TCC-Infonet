import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './dtos/product.model';
import { ProductCreateInput } from './dtos/product-create.input';
import { ProductUpdateInput } from './dtos/product-update.input';

@Resolver()
export class ProductResolver {
  constructor(private service : ProductService ) {}

  @Query(() => [Product])
  async getAllProducts() : Promise<Product[]> {
    return await this.service.getAll()
  }

  @Query(() => Product) 
  async getOneProduct(
    @Args('id') id:number
  ) : Promise<Product> {
    return await this.service.getOne(id)
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('product') data: ProductCreateInput
  ) : Promise<Product> {
    return await this.service.create(data)
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id')
    id: number,
    @Args('product') 
    data: ProductUpdateInput
  ) : Promise<Product> {
    return await this.service.update(id, data)
  }

  @Mutation(() => Product)
  async deleteProduct(
    @Args('id')
    id: number,
  ) {
    return await this.service.delete(id)
  }
}