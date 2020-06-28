'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { AccountEntity } from '../account.entity';

export class AccountDto extends AbstractDto {
    @ApiPropertyOptional()
    firstName: string;

    @ApiPropertyOptional()
    lastName: string;

    @ApiPropertyOptional()
    email: string;

    constructor(account: AccountEntity) {
        super(account);
        this.firstName = account.firstName;
        this.lastName = account.lastName;
        this.email = account.email;
    }
}
