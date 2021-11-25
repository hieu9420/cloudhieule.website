import { Bind, Req } from "@nestjs/common";
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { NestGateway } from "@nestjs/websockets/interfaces/nest-gateway.interface";
import { Chat } from "src/app/schema/chat.schema";
import { ChatService } from "./chat.service";
import { Request } from 'express';

@WebSocketGateway()
export class ChatGateway implements NestGateway{
    constructor(
        private chatService: ChatService,
    ){}

    afterInit(server: any){
    }

    async handleConnection(socket: any){
        socket.emit('allChats', await this.chatService.getChat());
    }

    handleDisconnect(socket: any){
    }

    @Bind(MessageBody(), ConnectedSocket())
    @SubscribeMessage('chat')
    handleNewMessage(chat: Chat, socket: any){
        console.log('newChat', chat);
        this.chatService.saveChat(chat);
        socket.emit('newChat', chat);
        socket.broadcast.emit('newChat', chat);
    }
}