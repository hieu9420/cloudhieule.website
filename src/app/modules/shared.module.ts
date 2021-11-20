import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { CvModule } from './cv/cv.module';
import { TimeLineDetailModule } from './time-line-detail/time-line-detail.module';
import { MotelCostModule } from './motel-cost/motel-cost.module';
import { GameModule } from './game/game.module';
import { LoginModule } from './login/login.module';
import { CmsnModule } from './cmsn/cmsn.module';
import { RandomModule } from './random/random.module';

const REUSE_LIST = [
  HomeModule,
  CvModule,
  TimeLineDetailModule,
  MotelCostModule,
  GameModule,
  RandomModule,

];


@Module({
  imports: [...REUSE_LIST, LoginModule, CmsnModule],
  exports: [...REUSE_LIST]
})
export class SharedModule {}
