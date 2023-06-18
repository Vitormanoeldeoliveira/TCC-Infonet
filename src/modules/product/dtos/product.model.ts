import { Field, ObjectType } from '@nestjs/graphql';
import { IProduct } from '../Interface/product.interface';

@ObjectType({ implements: IProduct })
export class Product extends IProduct {}

