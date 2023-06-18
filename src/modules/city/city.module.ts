import { Module } from '@nestjs/common';
import { CityResolver } from './city.resolver';
import { CityService } from './city.service';
import { cityProvider } from './providers/city.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CityResolver, CityService, ...cityProvider]
})
export class CityModule {}
