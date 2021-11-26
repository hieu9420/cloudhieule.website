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

    profileData: Profile;
    skillData: Skill[];
    timeLineData: TimeLine[];
    pointData: Point[];

    totalTC: number = 0;
    average: number = 0;

    @Get('/hieu-le')
    @Render('pages/cv/cv')
    async root() {
        this.profileData = await this.cvService.getProfileDataByKey('hieu-le');
        this.skillData = await this.cvService.getSkillDataByKey('hieu-le');
        this.timeLineData = await this.cvService.getTimeLineDataByKey('hieu-le');
        this.pointData = await this.cvService.getPointDataByKey('hieu-le')
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

    @Get('/nguyen-ngoc')
    @Render('pages/cv/cvNguyenNgoc')
    async renderCV(){
        this.profileData = await this.cvService.getProfileDataByKey('nguyen-ngoc');
        this.skillData = await this.cvService.getSkillDataByKey('nguyen-ngoc');
        this.pointData = await this.cvService.getPointDataByKey('nguyen-ngoc')
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

        return{
            titlePage: 'Curriculum Vitae',
            profileData : this.profileData, 
            skillData: this.skillData,
            pointData: this.pointData,
            totalTC: this.totalTC,
            average: this.average,
        }
    }
}
