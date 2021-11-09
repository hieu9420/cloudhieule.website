import { CvService } from './cv.service';
import { Profile } from '../../schema/profile.schema';
import { TimeLine } from '../../schema/time.line.schema';
import { Point } from 'src/app/schema/point.schema';
import { Skill } from 'src/app/schema/skill.schema';
export declare class CvController {
    private readonly cvService;
    constructor(cvService: CvService);
    profileData: Profile[];
    skillData: Skill[];
    timeLineData: TimeLine[];
    pointData: Point[];
    totalTC: number;
    average: number;
    root(): Promise<{
        titlePage: string;
        profileData: Profile[];
        skillData: Skill[];
        timeLineData: TimeLine[];
        pointData: Point[];
        totalTC: number;
        average: number;
        layout: boolean;
    }>;
}
