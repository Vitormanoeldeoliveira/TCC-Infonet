import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { userProvider } from './providers/user.provider';
import { DatabaseModule } from 'src/database/database.module';

import { JwtModule } from '@nestjs/jwt/dist/jwt.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '10s' }
    }),
  ],
  providers: [UserResolver, UserService, ...userProvider]
})
export class UserModule {}
