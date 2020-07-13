import { Logger } from '@nestjs/common';
import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
// eslint-disable-next-line @typescript-eslint/tslint/config
import { Server, Socket } from 'socket.io';

import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/CreateChatDto';

@WebSocketGateway()
export class ChatGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(public readonly chatService: ChatService) {}
    @WebSocketServer() server: Server;
    private _logger: Logger = new Logger('AppGateway');

    @SubscribeMessage('msgToServer')
    handleMessage(client: Socket, chatData: CreateChatDto): void {
        // console.log(chatData);
        const chat = chatData;
        void this.chatService.save(chat);
        this.server.emit('msgToClient', chatData);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    afterInit(server: Server) {
        this._logger.log('Init');
    }

    handleDisconnect(client: Socket) {
        this._logger.log(`Client disconnected: ${client.id}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleConnection(client: Socket, ...args: any[]) {
        this._logger.log(`Client connected: ${client.id}`);
    }
}
