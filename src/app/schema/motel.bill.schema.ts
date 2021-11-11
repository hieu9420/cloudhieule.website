import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MotelBillDocument = MotelBill & Document;
@Schema()
export class MotelBill{
  @Prop()
  motelID: string;

  @Prop()
  motelName: string;

  @Prop()
  motelBasicCost: number;

  @Prop()
  trashCost: number;

  @Prop()
  elecEachCost: number;

  @Prop()
  waterEachCost: number;

  @Prop()
  description: string;

  @Prop()
  roomNumber: number;

  @Prop()
  elecOldNumber: number;

  @Prop()
  elecNewNumber: number;

  @Prop()
  elecTotalNumber: number;

  @Prop()
  waterOldNumber: number;

  @Prop()
  waterNewNumber: number;

  @Prop()
  waterTotalNumber: number;

  @Prop()
  elecTotalCost: number;

  @Prop()
  waterTotalCost: number;

  @Prop()
  motelTotalCost: number;
}

export const MotelBillSchema = SchemaFactory.createForClass(MotelBill);