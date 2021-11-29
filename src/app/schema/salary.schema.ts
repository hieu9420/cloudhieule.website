import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, SchemaTypes, Types } from 'mongoose';

export type SalaryDocument = Salary & Document;
@Schema({timestamps: true})
export class Salary{
  @Prop({type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
  
  @Prop({type: Date})
  startTime;

  @Prop({type: Date})
  endTime;

  @Prop()
  basicSalary: number;

  @Prop()
  totalSalary: number;

  @Prop()
  spectDayOT: string;

}

export const SalarySchema = SchemaFactory.createForClass(Salary);