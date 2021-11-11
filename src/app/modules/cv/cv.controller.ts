import { Controller, Get, Render } from '@nestjs/common';
import { CvService } from './cv.service';
import { Profile } from '../../schema/profile.schema';
import { TimeLine } from '../../schema/time.line.schema';
import { Point } from 'src/app/schema/point.schema';
import { Skill } from 'src/app/schema/skill.schema';

@Controller('cv')
export class CvController {
    constructor(private readonly cvService: CvService,
        ) {}

    profileData: Profile[];
    skillData: Skill[];
    timeLineData: TimeLine[];
    pointData: Point[];

    totalTC: number = 0;
    average: number = 0;

    @Get()
    @Render('pages/cv/cv')
    async root() {
        this.profileData = await this.cvService.getProfileData();
        this.skillData = await this.cvService.getSkillData();
        this.timeLineData = await this.cvService.getTimeLineData();
        this.pointData = await this.cvService.getPointData()
            .then(points => {
                let totalPoint: number = 0;
                let totalTCTemp: number = 0;
                for(let i = 0; i < points.length; i++){
                    totalTCTemp += points[i].tc;
                    totalPoint += Number(points[i].points);
                }

                this.totalTC = totalTCTemp;
                this.average = Number((totalPoint/points.length).toFixed(2));
                return points;
            })
            .catch();

        return {
            titlePage: 'Curriculum Vitae',
            profileData : this.profileData, 
            skillData: this.skillData,
            timeLineData: this.timeLineData, 
            pointData: this.pointData,
            totalTC: this.totalTC,
            average: this.average,
            // layout: '../views/layout/admin-layout',
            layout: false,
        }
    }
}
