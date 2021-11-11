import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { ReadMore } from 'src/app/schema/read.more.schema';
import { TimeLine } from 'src/app/schema/time.line.schema';
import { CvService } from '../cv/cv.service';
import { TimeLineDetailService } from './time-line-detail.service';

@Controller('time-line-detail')
export class TimeLineDetailController {
    constructor(
        private readonly cvService: CvService,
        private readonly timeLineDetailService: TimeLineDetailService,
    ){}

    timeLineData: TimeLine[];
    readMoreData: ReadMore[];

    @Get('/:slug')
    @Render('pages/cv/detailTimeLine')
    async root(@Param('slug') slug: string){
        this.timeLineData = await this.cvService.getTimeLineDataBySlug(slug);
        this.readMoreData = await this.timeLineDetailService.getReadMoreBySlug(slug);
        return {
            titlePage: 'Detail Working',
            timeLineData: this.timeLineData,
            readMoreData: this.readMoreData,
            
        };
    }
}
