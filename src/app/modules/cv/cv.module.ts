import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfileSchema } from '../../schema/profile.schema';
import { TimeLineSchema } from '../../schema/time.line.schema';
import { PointSchema } from 'src/app/schema/point.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }, ]),
    MongooseModule.forFeature([{ name: 'TimeLine', schema: TimeLineSchema }]),
    MongooseModule.forFeature([{ name: 'Point', schema: PointSchema }]), 
  ],
  controllers: [CvController],
  providers: [CvService],
  exports: [CvService]
})
export class CvModule {}
