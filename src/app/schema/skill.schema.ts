import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;
@Schema({timestamps: true})
export class Skill{
    
  @Prop({required: true})
  profileKey: string;

  @Prop({required: true})
  subSkill: string;

  @Prop({required: true})
  key: string;

}

export const SkillSchema = SchemaFactory.createForClass(Skill);