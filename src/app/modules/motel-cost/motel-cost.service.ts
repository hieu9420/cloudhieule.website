import { Injectable } from '@nestjs/common';
import { Motel, MotelDocument } from '../../schema/motel.schema';
import { MotelCost, MotelCostDocument } from '../../schema/motel.cost.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MotelBill, MotelBillDocument } from 'src/app/schema/motel.bill.schema';

@Injectable()
export class MotelCostService {
    constructor(

        @InjectModel(Motel.name) private motelModel: Model<MotelDocument>,
        @InjectModel(MotelCost.name) private motelCostModel: Model<MotelCostDocument>,
        @InjectModel(MotelBill.name) private motelBillModel: Model<MotelBillDocument>,

    ){};

    public async getAll(): Promise<MotelCost[]>{
        return this.motelCostModel.find({}).exec();
    }

    public async getMotelData(): Promise<Motel[]>{
        return this.motelModel.find({}).exec();
    }

    public async createMotelCost(MotelCostModel: MotelCost): Promise<MotelCost>{
        const createdMotelCost = new this.motelCostModel(MotelCostModel);
        return createdMotelCost.save();
    }

    public async findByIDMotelCost(id): Promise<MotelBill[]>{
        return this.motelBillModel.find({_id: id}).exec();
    }
}
