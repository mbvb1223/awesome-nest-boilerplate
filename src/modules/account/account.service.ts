import { Injectable } from '@nestjs/common';

import { AccountEntity } from './account.entity';
import { AccountRepository } from './account.repository';
import { CreateAccountDto } from './dto/CreateAccountDto';

@Injectable()
export class AccountService {
    constructor(public readonly accountRepository: AccountRepository) {}

    async createAccount(
        createAccountDto: CreateAccountDto,
    ): Promise<AccountEntity> {
        const user = this.accountRepository.create(createAccountDto);

        return this.accountRepository.save(user);
    }

    async find(): Promise<AccountEntity[]> {
        return this.accountRepository.find();
    }
}
