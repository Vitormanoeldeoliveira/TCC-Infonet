import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloServerPluginLandingPageLocalDefault} from '@apollo/server/plugin/landingPage/default'
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PlantationModule } from './modules/plantation/plantation.module';
import { StateModule } from './modules/State/State.module';
import { ProductModule } from './modules/product/product.module';
import { HarvestModule } from './modules/harvest/harvest.module';
import { CityModule } from './modules/city/city.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    UserModule,
    PlantationModule,
    StateModule,
    ProductModule,
    HarvestModule,
    CityModule,
    DatabaseModule,
    ConfigModule.forRoot({envFilePath: '.env'}),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
