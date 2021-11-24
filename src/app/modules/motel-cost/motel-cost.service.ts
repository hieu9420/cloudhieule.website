import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Motel, MotelDocument } from '../../schema/motel.schema';
import { MotelCost, MotelCostDocument } from '../../schema/motel.cost.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MotelBill, MotelBillDocument } from 'src/app/schema/motel.bill.schema';
import axios, { AxiosResponse } from 'axios';
import { API_LIST } from '../../../config/contains/shared.api.link';

import * as dotenv from 'dotenv';
import { map, Observable, tap } from 'rxjs';

dotenv.config();
@Injectable()
export class MotelCostService {
    constructor(

        @InjectModel(Motel.name) private motelModel: Model<MotelDocument>,
        @InjectModel(MotelCost.name) private motelCostModel: Model<MotelCostDocument>,
        @InjectModel(MotelBill.name) private motelBillModel: Model<MotelBillDocument>,
        private readonly httpService: HttpService,

    ){};

    public async getAll(): Promise<MotelCost[]>{
        return this.motelCostModel.find({}).exec();
    }

    public async getApiMotel(): Promise<Motel[]>{
        // return this.motelModel.find({}).exec();
        return await axios.get(`${API_LIST.API_GET_ALL_MOTEL}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
        })
        .then(res => { 
            console.log(res)
            if(!res || res?.data){
                return new UnauthorizedException('Can Not Get Data');
            }
            console.log(res.data)
            return res.data;
        })
        .catch(error => console.log(error))
      }
    

    public async createMotelCost(MotelCostModel: MotelCost): Promise<MotelCost>{
        const createdMotelCost = new this.motelCostModel(MotelCostModel);
        return createdMotelCost.save();
    }

    public async findByIDMotelCost(id): Promise<MotelBill[]>{
        return this.motelBillModel.find({_id: id}).exec();
    }

    public async getApiMotelCost(): Promise<MotelCost[]> {
        return await axios.get(`${API_LIST.API_GET_ALL_MOTEL_COST}`, {withCredentials: true})
        .then(res => { 
            if(!res || res?.data){
                return new UnauthorizedException('Can Not Get Data');
            }
            return res.data;
        })
        .catch(error => console.log(error))
        
    }

    // public async getApiMotelCost(): Promise<Observable<AxiosResponse<MotelCost[], any>>>{
    //     return await this.httpService.get<MotelCost[]>(`${API_LIST.API_GET_ALL_MOTEL_COST}`, { withCredentials: true }).pipe(map(res => res.data));
    // }
}
