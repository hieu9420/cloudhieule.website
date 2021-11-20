import { MotelBill } from 'src/app/schema/motel.bill.schema';
import { MotelCost } from 'src/app/schema/motel.cost.schema';
import { Motel } from 'src/app/schema/motel.schema';
import { MotelCostService } from './motel-cost.service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare class MotelCostController {
    private motelCostService;
    constructor(motelCostService: MotelCostService);
    motelData: Motel[];
    motelCostData: MotelCost[];
    root(): Promise<{
        motelData: Observable<AxiosResponse<MotelCost[], any>>;
        motelCostData: MotelCost[];
    }>;
    renderCreateForm(motelCostData: MotelCost): Promise<number>;
    renderDetail(id: string): Promise<MotelBill[]>;
}
