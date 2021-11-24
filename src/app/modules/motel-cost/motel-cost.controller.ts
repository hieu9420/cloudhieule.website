import { Body, Controller, Get, Param, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { MotelBill } from 'src/app/schema/motel.bill.schema';
import { MotelCost } from 'src/app/schema/motel.cost.schema';
import { Motel } from 'src/app/schema/motel.schema';
import { MotelCostService } from './motel-cost.service';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Request } from 'express';
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
    async root(@Req() request: Request, @Res() res){
        const cookie = request.cookies['jwt'];

        if(!cookie){
            res.redirect('/login');
        }

        const data = await this.jwtService.verifyAsync(cookie);
        
        if(!data){
            res.redirect('/auth/login');
        }

        // let motelData = await axios.get('http://localhost:3003/motel/GetAllMotelCost', {withCredentials: true});
        let motelData = await this.motelCostService.getApiMotel();
        
        let motelCostData = await this.motelCostService.getApiMotelCost();
        console.log(motelCostData);

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
