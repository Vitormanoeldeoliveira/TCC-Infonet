import { Module } from '@nestjs/common';
import { EmailvalidateResolver } from './emailvalidate.resolver';
import { EmailvalidateService } from './emailvalidate.service';
import { EmailValidateProvider } from './providers/email-validate.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [EmailvalidateResolver, EmailvalidateService, ...EmailValidateProvider]
})
export class EmailvalidateModule {}
