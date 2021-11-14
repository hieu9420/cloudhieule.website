import { Model } from 'mongoose';
import { Profile, ProfileDocument } from '../../schema/profile.schema';
import { TimeLine, TimeLineDocument } from '../../schema/time.line.schema';
import { Point, PointDocument } from 'src/app/schema/point.schema';
export declare class CvService {
    private profileModel;
    private timeLineModel;
    private pointModel;
    constructor(profileModel: Model<ProfileDocument>, timeLineModel: Model<TimeLineDocument>, pointModel: Model<PointDocument>);
    getProfileDataByKey(key: string): Promise<Profile[]>;
    getSkillDataByKey(key: string): Promise<Profile[]>;
    getTimeLineDataByKey(key: string): Promise<TimeLine[]>;
    getTimeLineDataBySlug(slug: string): Promise<TimeLine[]>;
    getPointDataByKey(key: string): Promise<Point[]>;
}
