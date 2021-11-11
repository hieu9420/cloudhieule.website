import { Motel, MotelDocument } from '../../schema/motel.schema';
import { MotelCost, MotelCostDocument } from '../../schema/motel.cost.schema';
import { Model } from 'mongoose';
import { MotelBillDocument } from 'src/app/schema/motel.bill.schema';
export declare class MotelCostService {
    private motelModel;
    private motelCostModel;
    private motelBillModel;
    constructor(motelModel: Model<MotelDocument>, motelCostModel: Model<MotelCostDocument>, motelBillModel: Model<MotelBillDocument>);
    getAll(): Promise<MotelCost[]>;
    getMotelData(): Promise<Motel[]>;
    createMotelCost(MotelCostModel: MotelCost): Promise<MotelCost>;
}
