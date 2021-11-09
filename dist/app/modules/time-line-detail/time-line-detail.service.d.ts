import { Model } from 'mongoose';
import { ReadMore, ReadMoreDocument } from 'src/app/schema/read.more.schema';
export declare class TimeLineDetailService {
    private readMoreeModel;
    constructor(readMoreeModel: Model<ReadMoreDocument>);
    getReadMoreBySlug(slug: string): Promise<(ReadMore & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
