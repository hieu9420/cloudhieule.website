import { Module } from '@nestjs/common';
import { TimeLineDetailController } from './time-line-detail.controller';
import { TimeLineDetailService } from './time-line-detail.service';
import { CvModule } from '../cv/cv.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadMoreSchema } from 'src/app/schema/read.more.schema';

@Module({
  imports: [
    CvModule,
    MongooseModule.forFeature([{ name: 'ReadMore', schema: ReadMoreSchema }]),
  ],
  controllers: [TimeLineDetailController],
  providers: [TimeLineDetailService]
})
export class TimeLineDetailModule {}
