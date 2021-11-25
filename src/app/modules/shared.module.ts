import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { CvModule } from './cv/cv.module';
import { TimeLineDetailModule } from './time-line-detail/time-line-detail.module';
import { MotelCostModule } from './motel-cost/motel-cost.module';
import { GameModule } from './game/game.module';
import { LoginModule } from './login/login.module';
import { CmsnModule } from './cmsn/cmsn.module';
import { RandomModule } from './random/random.module';
import { LogoutModule } from './logout/logout.module';
import { TestModule } from './test/test.module';
import { ChatModule } from './chat/chat.module';

const REUSE_LIST = [
  HomeModule,
  CvModule,
  TimeLineDetailModule,
  MotelCostModule,
  GameModule,
  RandomModule,
  LoginModule, 
  CmsnModule, 
  LogoutModule,
  TestModule,
  ChatModule
];


@Module({
  imports: [...REUSE_LIST],
  exports: [...REUSE_LIST]
})
export class SharedModule {}
