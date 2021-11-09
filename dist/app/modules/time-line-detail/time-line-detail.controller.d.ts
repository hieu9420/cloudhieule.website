import { ReadMore } from 'src/app/schema/read.more.schema';
import { TimeLine } from 'src/app/schema/time.line.schema';
import { CvService } from '../cv/cv.service';
import { TimeLineDetailService } from './time-line-detail.service';
export declare class TimeLineDetailController {
    private readonly cvService;
    private readonly timeLineDetailService;
    constructor(cvService: CvService, timeLineDetailService: TimeLineDetailService);
    timeLineData: TimeLine[];
    readMoreData: ReadMore[];
    root(slug: string): Promise<{
        titlePage: string;
        timeLineData: TimeLine[];
        readMoreData: ReadMore[];
    }>;
}
