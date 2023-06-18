import { Module } from "@nestjs/common";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";
import { productProvider } from "./providers/product.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [ProductResolver, ProductService, ...productProvider]
})
export class ProductModule {}