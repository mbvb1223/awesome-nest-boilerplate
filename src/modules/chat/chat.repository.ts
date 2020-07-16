import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { ChatEntity } from './chat.entity';

@EntityRepository(ChatEntity)
export class ChatRepository extends Repository<ChatEntity> {}
