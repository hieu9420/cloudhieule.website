import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

export type TimeLineDocument = TimeLine & Document;

@Schema({timestamps: true})
export class TimeLine{
  @Prop({required: true})
  timeFrom: string;

  @Prop()
  timeEnd: string;

  @Prop({required: true})
  company: string;

  @Prop()
  salary: string;

  @Prop()
  position: string;

  @Prop()
  skill: string;

  @Prop({required: true})
  show: string;

  @Prop()
  logo: string;

  @Prop({required: true, slug: 'company', unique: true})
  slug: string;

}

export const TimeLineSchema = SchemaFactory.createForClass(TimeLine);