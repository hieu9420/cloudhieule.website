import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReadMore, ReadMoreDocument } from 'src/app/schema/read.more.schema';

@Injectable()
export class TimeLineDetailService {
    constructor(
        @InjectModel(ReadMore.name) private readMoreeModel: Model<ReadMoreDocument>,
    ){}

    public async getReadMoreBySlug(slug: string){
        return this.readMoreeModel.find({slugKey: slug}).exec();
    }

}
