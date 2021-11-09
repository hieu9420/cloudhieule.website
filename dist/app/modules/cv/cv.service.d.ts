import { Model } from 'mongoose';
import { Profile, ProfileDocument } from '../../schema/profile.schema';
import { TimeLine, TimeLineDocument } from '../../schema/time.line.schema';
import { Point, PointDocument } from 'src/app/schema/point.schema';
export declare class CvService {
    private profileModel;
    private timeLineModel;
    private pointModel;
    constructor(profileModel: Model<ProfileDocument>, timeLineModel: Model<TimeLineDocument>, pointModel: Model<PointDocument>);
    getProfileData(): Promise<Profile[]>;
    getSkillData(): Promise<Profile[]>;
    getTimeLineData(): Promise<TimeLine[]>;
    getTimeLineDataBySlug(slug: string): Promise<TimeLine[]>;
    getPointData(): Promise<Point[]>;
}
