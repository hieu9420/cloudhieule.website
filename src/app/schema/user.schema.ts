import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({timestamps: true})
export class User{
  @Prop({required: true})
  level: number;

  @Prop()
  adminKey: string;

  @Prop({required: true})
  userName: string;

}

export const UserSchema = SchemaFactory.createForClass(User);