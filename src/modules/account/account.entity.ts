import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { AccountDto } from './dto/AccountDto';

@Entity({ name: 'accounts' })
export class AccountEntity extends AbstractEntity<AccountDto> {
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ unique: true, nullable: true })
    email: string;

    dtoClass = AccountDto;
}
