import { HttpService } from '@nestjs/axios';
import { Motel, MotelDocument } from '../../schema/motel.schema';
import { MotelCost, MotelCostDocument } from '../../schema/motel.cost.schema';
import { Model } from 'mongoose';
import { MotelBill, MotelBillDocument } from 'src/app/schema/motel.bill.schema';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
export declare class MotelCostService {
    private motelModel;
    private motelCostModel;
    private motelBillModel;
    private readonly httpService;
    constructor(motelModel: Model<MotelDocument>, motelCostModel: Model<MotelCostDocument>, motelBillModel: Model<MotelBillDocument>, httpService: HttpService);
    getAll(): Promise<MotelCost[]>;
    getMotelData(): Promise<Motel[]>;
    createMotelCost(MotelCostModel: MotelCost): Promise<MotelCost>;
    findByIDMotelCost(id: any): Promise<MotelBill[]>;
    getAPIAllDataMotel(): Promise<Observable<AxiosResponse<MotelCost[], any>>>;
}
