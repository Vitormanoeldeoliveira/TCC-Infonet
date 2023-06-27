import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantResolver } from './plant.resolver';
import { plantProvider } from './providers/plant.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [PlantService, PlantResolver, ...plantProvider]
})
export class PlantModule {}
