import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Profile, ProfileDocument } from '../../schema/profile.schema';
import { TimeLine, TimeLineDocument } from '../../schema/time.line.schema';
import { Point, PointDocument } from 'src/app/schema/point.schema';

@Injectable()
export class CvService {

    constructor(
        
        @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
        @InjectModel(TimeLine.name) private timeLineModel: Model<TimeLineDocument>,
        @InjectModel(Point.name) private pointModel: Model<PointDocument>,

    ){};

    public async getProfileData(): Promise<Profile[]>{
        return this.profileModel.find({profileKey: 'info'}).exec();
    }

    public async getSkillData(): Promise<Profile[]>{
        return this.profileModel.find({profileKey: 'skill'}).exec();
    }

    public async getTimeLineData(): Promise<TimeLine[]>{
        return this.timeLineModel.find().exec();
    }

    public async getTimeLineDataBySlug(slug: string): Promise<TimeLine[]>{
        return this.timeLineModel.find({slug: slug}).exec();
    }

    public async getPointData(): Promise<Point[]>{
        return this.pointModel.find().exec();
    }

}
