import { Module } from '@nestjs/common';
import { HarvestExpenseResolver } from './harvest-expense.resolver';
import { HarvestExpenseService } from './harvest-expense.service';
import { DatabaseModule } from 'src/database/database.module';
import { harvestExpenseProvider } from './providers/harvestExpense.provider';

@Module({
  imports:[DatabaseModule],
  providers: [HarvestExpenseResolver, HarvestExpenseService, ...harvestExpenseProvider]
})
export class HarvestExpenseModule {}
