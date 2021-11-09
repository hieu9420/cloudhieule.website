import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReadMoreDocument = ReadMore & Document;
@Schema({timestamps: true})
export class ReadMore{
    
  @Prop({required: true})
  slugKey: string;

  @Prop()
  content: string;

}

export const ReadMoreSchema = SchemaFactory.createForClass(ReadMore);