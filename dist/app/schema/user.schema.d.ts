import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    level: number;
    adminKey: string;
    userName: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, {}>;
