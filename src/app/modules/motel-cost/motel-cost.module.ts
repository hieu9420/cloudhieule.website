import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MotelBillSchema } from 'src/app/schema/motel.bill.schema';
import { MotelCostSchema } from 'src/app/schema/motel.cost.schema';
import { MotelSchema } from 'src/app/schema/motel.schema';
import { MotelCostController } from './motel-cost.controller';
import { MotelCostService } from './motel-cost.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Motel', schema: MotelSchema }, ]),
    MongooseModule.forFeature([{ name: 'MotelCost', schema: MotelCostSchema }, ]),
    MongooseModule.forFeature([{ name: 'MotelBill', schema: MotelBillSchema }, ]),
  ],
  controllers: [MotelCostController],
  providers: [MotelCostService]
})
export class MotelCostModule {}
