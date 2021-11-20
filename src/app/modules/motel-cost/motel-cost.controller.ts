import { Body, Controller, Get, Param, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { MotelBill } from 'src/app/schema/motel.bill.schema';
import { MotelCost } from 'src/app/schema/motel.cost.schema';
import { Motel } from 'src/app/schema/motel.schema';
import { MotelCostService } from './motel-cost.service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('motel-cost')
export class MotelCostController {
    constructor(private motelCostService: MotelCostService){};
    motelData: Motel[];
    motelCostData: MotelCost[];

    @Get()
    @Render('pages/motel-cost/motelCost')
    async root(){
        let motelData = await this.motelCostService.getAPIAllDataMotel();
        this.motelCostData = await this.motelCostService.getAll();

        return{
            motelData: motelData,
            motelCostData: this.motelCostData,

        };
    }

    @Post('/create')
    @Redirect('/motel-cost')
    async renderCreateForm(@Body() motelCostData: MotelCost){
        motelCostData.elecTotalNumber = motelCostData.elecNewNumber - motelCostData.elecOldNumber;
        motelCostData.waterTotalNumber = motelCostData.waterNewNumber - motelCostData.waterOldNumber;

        if(motelCostData.motelID != null && motelCostData.roomNumber != null && motelCostData.elecTotalCost != null && motelCostData.waterTotalCost != null && motelCostData.motelTotalCost != null){
            await this.motelCostService.createMotelCost(motelCostData);
        }
        else{
            return 0;
        }
    }

    @Get(':id')
    @Render('pages/motel-cost/detailMotelCost')
    async renderDetail(@Param('id') id: string){
        return await this.motelCostService.findByIDMotelCost(id);
    }
}
