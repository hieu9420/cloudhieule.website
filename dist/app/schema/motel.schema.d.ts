import { Document, Types } from 'mongoose';
export declare type MotelDocument = Motel & Document;
export declare class Motel {
    _id: Types.ObjectId;
    motelName: string;
    motelBasicCost: number;
    trashCost: number;
    elecEachCost: number;
    waterEachCost: number;
}
export declare const MotelSchema: import("mongoose").Schema<Document<Motel, any, any>, import("mongoose").Model<Document<Motel, any, any>, any, any, any>, {}>;
