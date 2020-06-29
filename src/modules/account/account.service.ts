import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

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

    async update(
        id: string,
        createAccountDto: CreateAccountDto,
    ): Promise<AccountEntity> {
        const toUpdate = await this.accountRepository.findOne({ id });
        const updated = Object.assign(toUpdate, createAccountDto);

        return this.accountRepository.save(updated);
    }

    async find(): Promise<AccountEntity[]> {
        return this.accountRepository.find();
    }

    async findOne(id: string): Promise<AccountEntity> {
        return this.accountRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {
        return this.accountRepository.delete({ id });
    }
}
