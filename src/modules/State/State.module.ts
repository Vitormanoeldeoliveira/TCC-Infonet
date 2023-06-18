import { Module } from "@nestjs/common";
import { StateResolver } from "./State.resolver";
import { StateService } from "./State.service";
import { StateProvider } from "./providers/State.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [StateResolver, StateService, ...StateProvider]
})
export class StateModule {}