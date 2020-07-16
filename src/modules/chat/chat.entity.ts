import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { ChatDto } from './dto/ChatDto';

@Entity({ name: 'chat' })
export class ChatEntity extends AbstractEntity<ChatDto> {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    message: string;

    dtoClass = ChatDto;
}
