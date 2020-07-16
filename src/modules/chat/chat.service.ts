import { Injectable } from '@nestjs/common';

import { ChatEntity } from './chat.entity';
import { ChatRepository } from './chat.repository';
import { CreateChatDto } from './dto/CreateChatDto';

@Injectable()
export class ChatService {
    constructor(public readonly chatRepository: ChatRepository) {}

    async save(chatDto: CreateChatDto): Promise<ChatEntity> {
        const chat = this.chatRepository.create(chatDto);

        return this.chatRepository.save(chat);
    }

    async find(): Promise<ChatEntity[]> {
        return this.chatRepository.find();
    }
}
