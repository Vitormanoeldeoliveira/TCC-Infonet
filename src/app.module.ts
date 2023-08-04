import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import {ApolloServerPluginLandingPageLocalDefault} from '@apollo/server/plugin/landingPage/default'
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PlantationModule } from './modules/plantation/plantation.module';
import { StateModule } from './modules/State/State.module';
import { HarvestModule } from './modules/harvest/harvest.module';
import { CityModule } from './modules/city/city.module';
import { PlantModule } from './modules/plant/plant.module';
import { HarvestExpenseModule } from './modules/harvest-expense/harvest-expense.module';
import { ProfitModule } from './modules/profit/profit.module';
import { JwtModule } from '@nestjs/jwt';
import { EmailvalidateService } from './modules/user/complements/emailValidate/emailvalidate.service';
import { EmailvalidateModule } from './modules/user/complements/emailValidate/emailvalidate.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UserModule,
    PlantationModule,
    StateModule,
    HarvestModule,
    CityModule,
    PlantModule,
    HarvestExpenseModule,
    DatabaseModule,
    ConfigModule.forRoot({envFilePath: '.env'}),
    ProfitModule,
    EmailvalidateModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '10s' }
    }),
  ],
  controllers: [],
})
export class AppModule {}
