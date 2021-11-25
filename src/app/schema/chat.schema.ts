import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;
@Schema({timestamps: true})
export class Chat{
  @Prop()
  message: string;

  @Prop()
  senderId: string;

  @Prop()
  senderName: string;

  constructor(chat?: Partial<Chat>){
      Object.assign(this, chat);
  }

}

export const ChatSchema = SchemaFactory.createForClass(Chat);