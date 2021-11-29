import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalarySchema } from 'src/app/schema/salary.schema';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Salary', schema: SalarySchema }, ]),
  ],
  controllers: [SalaryController],
  providers: [SalaryService]
})
export class SalaryModule {}
