import { Controller, Get, Render } from '@nestjs/common';

import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(public readonly chatService: ChatService) {}

    @Get('')
    @Render('chat/views/index')
    async index(): Promise<any> {
        const chat = await this.chatService.find();
        // console.log(accounts.toDtos());

        return { chat };
    }
}
