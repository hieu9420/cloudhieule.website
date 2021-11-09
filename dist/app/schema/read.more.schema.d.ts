import { Document } from 'mongoose';
export declare type ReadMoreDocument = ReadMore & Document;
export declare class ReadMore {
    slugKey: string;
    content: string;
}
export declare const ReadMoreSchema: import("mongoose").Schema<Document<ReadMore, any, any>, import("mongoose").Model<Document<ReadMore, any, any>, any, any, any>, {}>;
