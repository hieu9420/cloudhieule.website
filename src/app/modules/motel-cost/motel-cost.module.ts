import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MotelBillSchema } from 'src/app/schema/motel.bill.schema';
import { MotelCostSchema } from 'src/app/schema/motel.cost.schema';
import { MotelSchema } from 'src/app/schema/motel.schema';
import { MotelCostController } from './motel-cost.controller';
import { MotelCostService } from './motel-cost.service';

import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
dotenv.config();

const jwtSecret = process.env.JWT_KEY;

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MongooseModule.forFeature([{ name: 'Motel', schema: MotelSchema }, ]),
    MongooseModule.forFeature([{ name: 'MotelCost', schema: MotelCostSchema }, ]),
    MongooseModule.forFeature([{ name: 'MotelBill', schema: MotelBillSchema }, ]),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [MotelCostController],
  providers: [MotelCostService]
})
export class MotelCostModule {}
