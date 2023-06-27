import { Module } from '@nestjs/common';
import { ProfitResolver } from './profit.resolver';
import { ProfitService } from './profit.service';
import { DatabaseModule } from 'src/database/database.module';
import { profitProvider } from './providers/profit.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ProfitResolver, ProfitService, ...profitProvider]
})
export class ProfitModule {}
