import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PointDocument = Point & Document;
@Schema({timestamps: true})
export class Point{
    
  @Prop({required: true})
  nameSubject: string;

  @Prop()
  year: string;

  @Prop({required: true})
  semester: string;

  @Prop()
  tc: number;

  @Prop({required: true})
  points: string;

}

export const PointSchema = SchemaFactory.createForClass(Point);