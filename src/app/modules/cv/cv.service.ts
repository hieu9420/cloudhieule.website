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

    public async getProfileDataByKey(key: string): Promise<Profile>{
        return this.profileModel.findOne({profileKey: 'info', key: key}).exec();
    }

    public async getSkillDataByKey(key: string): Promise<Profile[]>{
        return this.profileModel.find({profileKey: 'skill', key: key}).exec();
    }

    public async getTimeLineDataByKey(key: string): Promise<TimeLine[]>{
        return this.timeLineModel.find({key: key}).exec();
    }

    public async getTimeLineDataBySlug(slug: string): Promise<TimeLine[]>{
        return this.timeLineModel.find({slug: slug}).exec();
    }

    public async getPointDataByKey(key: string): Promise<Point[]>{
        return this.pointModel.find({key: key}).exec();
    }

}
