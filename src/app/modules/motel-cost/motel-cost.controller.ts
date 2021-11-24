import { Body, Controller, Get, Param, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { MotelCost } from 'src/app/schema/motel.cost.schema';
import { Motel } from 'src/app/schema/motel.schema';
import { MotelCostService } from './motel-cost.service';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('motel-cost')
export class MotelCostController {
    constructor(
        private motelCostService: MotelCostService,
        private jwtService: JwtService
    ){};
    motelData: Motel[];
    motelCostData: MotelCost[];

    @Get()
    @Render('pages/motel-cost/motelCost')
    async root(@Req() request: Request, @Res() response: Response){
        const cookie = request.cookies['jwt'];

        if(!cookie){
            response.redirect('/login');
        }

        this.motelData = await this.motelCostService.getApiMotel(cookie);
        
        this.motelCostData = await this.motelCostService.getApiMotelCost(cookie);

        return{
            motelData: this.motelData,
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
