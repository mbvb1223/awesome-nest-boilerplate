import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { AccountService } from './account.service';
import { AccountDto } from './dto/AccountDto';
import { CreateAccountDto } from './dto/CreateAccountDto';

@Controller('accounts')
export class AccountController {
    constructor(private readonly _accountService: AccountService) {}

    @Get('')
    @Render('account/views/index')
    async index(): Promise<any> {
        const accounts = await this._accountService.find();
        // console.log(accounts.toDtos());

        return { accounts };
    }

    @Get('create')
    @Render('account/views/create')
    create(): any {
        return {};
    }

    @Post('store')
    async store(
        @Body() createAccountDto: CreateAccountDto,
    ): Promise<AccountDto> {
        const createdUser = await this._accountService.createAccount(
            createAccountDto,
        );
        // eslint-disable-next-line no-restricted-syntax
        console.log(createdUser);
        return createdUser.toDto();
    }

    @Get(':id/edit')
    @Render('account/views/edit')
    async edit(@Param('id') id: string): Promise<any> {
        // eslint-disable-next-line no-restricted-syntax
        console.log(id);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const account = await this._accountService.findOne(id);
        // eslint-disable-next-line no-restricted-syntax
        console.log(account);
        // return account.toDto();

        return { account: account.toDto() };
    }

    @Post(':id/update')
    async update(
        @Body() createAccountDto: CreateAccountDto,
        @Param('id') id: string,
    ): Promise<AccountDto> {
        const createdUser = await this._accountService.update(
            id,
            createAccountDto,
        );
        // eslint-disable-next-line no-restricted-syntax
        console.log(createdUser);
        return createdUser.toDto();
    }

    @Get(':id/delete')
    @Render('account/views/index')
    async delete(@Param('id') id: string): Promise<DeleteResult> {
        const asdf = await this._accountService.delete(id);

        // eslint-disable-next-line @typescript-eslint/tslint/config
        return asdf;
    }
}
