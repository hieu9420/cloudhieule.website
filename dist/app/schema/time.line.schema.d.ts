import { Document } from 'mongoose';
export declare type TimeLineDocument = TimeLine & Document;
export declare class TimeLine {
    timeFrom: string;
    timeEnd: string;
    company: string;
    salary: string;
    position: string;
    skill: string;
    show: string;
    logo: string;
    slug: string;
}
export declare const TimeLineSchema: import("mongoose").Schema<Document<TimeLine, any, any>, import("mongoose").Model<Document<TimeLine, any, any>, any, any, any>, {}>;
