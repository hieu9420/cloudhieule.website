import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LogoutController } from './logout.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [LogoutController]
})
export class LogoutModule {}
