import { Module } from "@nestjs/common";
import { PlantationResolver } from "./plantation.resolver";
import { PlantationService } from "./plantation.service";
import { plantationProvider } from "./providers/plantation.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [PlantationResolver, PlantationService, ...plantationProvider]
})
export class PlantationModule {}