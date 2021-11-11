import { Document } from 'mongoose';
export declare type MotelBillDocument = MotelBill & Document;
export declare class MotelBill {
    motelID: string;
    motelName: string;
    motelBasicCost: number;
    trashCost: number;
    elecEachCost: number;
    waterEachCost: number;
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
export declare const MotelBillSchema: import("mongoose").Schema<Document<MotelBill, any, any>, import("mongoose").Model<Document<MotelBill, any, any>, any, any, any>, {}>;
