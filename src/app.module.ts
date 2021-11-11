import { Module } from '@nestjs/common';
// import { HomeModule } from './app/modules/home/home.module';
// import { CvModule } from './app/modules/cv/cv.module';
// import { TimeLineDetailModule } from './app/modules/time-line-detail/time-line-detail.module';
import { SharedModule } from './app/modules/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { environmentProd } from './environments/environment.prod';

@Module({
  imports: [
    // HomeModule,
    // CvModule,
    // TimeLineDetailModule,
    SharedModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(environmentProd.API_BASE_PATH)],
})
export class AppModule {}