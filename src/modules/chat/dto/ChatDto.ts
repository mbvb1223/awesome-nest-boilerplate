'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { ChatEntity } from '../chat.entity';

export class ChatDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    message: string;

    constructor(chat: ChatEntity) {
        super(chat);
        this.name = chat.name;
        this.message = chat.message;
    }
}
