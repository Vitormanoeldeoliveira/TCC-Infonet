import { Module } from '@nestjs/common';
import { HarvestResolver } from './harvest.resolver';
import { HarvestService } from './harvest.service';
import { DatabaseModule } from 'src/database/database.module';
import { harvestProvider } from './providers/harvest.provider';

@Module({
  imports: [DatabaseModule],
  providers: [HarvestResolver, HarvestService, ...harvestProvider],
})
export class HarvestModule {}
