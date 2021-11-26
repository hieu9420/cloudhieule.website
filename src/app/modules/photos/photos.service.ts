import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from 'src/app/schema/profile.schema';

@Injectable()
export class PhotosService {
    constructor(
        @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
    ){}

    public saveAvatar(fileName: string, key: string){
        return this.profileModel.findOneAndUpdate({key: key , profileKey: 'info'}, {avatar: fileName});
    }
}
