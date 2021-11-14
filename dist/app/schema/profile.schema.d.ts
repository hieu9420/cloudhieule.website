import { Document } from 'mongoose';
export declare type ProfileDocument = Profile & Document;
export declare class Profile {
    profileKey: string;
    key: string;
    name: string;
    birthDay: string;
    email: string;
    address: string;
    phoneNum: string;
    subAddress: string;
    position: string;
    university: string;
    subSkill: string;
}
export declare const ProfileSchema: import("mongoose").Schema<Document<Profile, any, any>, import("mongoose").Model<Document<Profile, any, any>, any, any, any>, {}>;
