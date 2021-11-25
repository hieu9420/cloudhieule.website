import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, ChatDocument } from 'src/app/schema/chat.schema';

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
    ){}

    async getChat(): Promise<Chat[]>{
        return this.chatModel.find().exec();
    }

    async saveChat(chat: Chat): Promise<void>{
        const createChat = new this.chatModel(chat);
        await createChat.save();
    }
}
