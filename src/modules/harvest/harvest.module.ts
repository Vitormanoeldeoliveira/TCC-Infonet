import { Module } from '@nestjs/common';
import { HarvestResolver } from './harvest.resolver';
import { HarvestService } from './harvest.service';
import { DatabaseModule } from 'src/database/database.module';
import { harvestProvider } from './providers/harvest.provider';
import { ProfitModule } from '../profit/profit.module';
import { profitProvider } from '../profit/providers/profit.provider';

@Module({
  imports: [DatabaseModule, ProfitModule],
  providers: [HarvestResolver, HarvestService, ...harvestProvider, ...profitProvider],
})
export class HarvestModule {}
