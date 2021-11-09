import { Document } from 'mongoose';
export declare type PointDocument = Point & Document;
export declare class Point {
    nameSubject: string;
    year: string;
    semester: string;
    tc: number;
    points: string;
}
export declare const PointSchema: import("mongoose").Schema<Document<Point, any, any>, import("mongoose").Model<Document<Point, any, any>, any, any, any>, {}>;
