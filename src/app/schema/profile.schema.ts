import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {

  @Prop()
  profileKey: string;

  @Prop()
  key: string;

  @Prop()
  name: string;

  @Prop()
  birthDay: string;

  @Prop()
  email: string;
  
  @Prop()
  address: string;
  
  @Prop()
  phoneNum: string;
  
  @Prop()
  subAddress: string;
  
  @Prop()
  position: string;
  
  @Prop()
  university: string;

  @Prop()
  subSkill: string;

  @Prop()
  avatar: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);