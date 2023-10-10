import { Module } from "@nestjs/common";
import { PlantationResolver } from "./plantation.resolver";
import { PlantationService } from "./plantation.service";
import { plantationProvider } from "./providers/plantation.provider";
import { DatabaseModule } from "src/database/database.module";
import { HarvestModule } from "../harvest/harvest.module";
import { harvestProvider } from "../harvest/providers/harvest.provider";
import { HarvestService } from "../harvest/harvest.service";
import { ProfitService } from "../profit/profit.service";
import { profitProvider } from "../profit/providers/profit.provider";
import { ProfitModule } from "../profit/profit.module";

@Module({
  imports: [
    DatabaseModule,
    HarvestModule,
    ProfitModule
  ],
  providers: [
    PlantationResolver, 
    PlantationService,
    HarvestService,
    ProfitService,
    ...plantationProvider, 
    ...harvestProvider,
    ...profitProvider
  ]
})
export class PlantationModule {}