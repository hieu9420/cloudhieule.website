import { Document } from 'mongoose';
export declare type MotelCostDocument = MotelCost & Document;
export declare class MotelCost {
    motelID: string;
    description: string;
    roomNumber: number;
    elecOldNumber: number;
    elecNewNumber: number;
    elecTotalNumber: number;
    waterOldNumber: number;
    waterNewNumber: number;
    waterTotalNumber: number;
    elecTotalCost: number;
    waterTotalCost: number;
    motelTotalCost: number;
}
export declare const MotelCostSchema: import("mongoose").Schema<Document<MotelCost, any, any>, import("mongoose").Model<Document<MotelCost, any, any>, any, any, any>, {}>;
