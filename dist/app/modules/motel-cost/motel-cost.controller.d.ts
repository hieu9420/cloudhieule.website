import { MotelCost } from 'src/app/schema/motel.cost.schema';
import { Motel } from 'src/app/schema/motel.schema';
import { MotelCostService } from './motel-cost.service';
export declare class MotelCostController {
    private motelCostService;
    constructor(motelCostService: MotelCostService);
    motelData: Motel[];
    motelCostData: MotelCost[];
    root(): Promise<{
        motelData: Motel[];
        motelCostData: MotelCost[];
    }>;
    renderCreateForm(motelCostData: MotelCost): Promise<number>;
}
