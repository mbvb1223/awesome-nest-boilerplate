import { Body, Controller, Get, Post, Render } from '@nestjs/common';

import { AccountService } from './account.service';
import { AccountDto } from './dto/AccountDto';
import { CreateAccountDto } from './dto/CreateAccountDto';

@Controller('accounts')
export class AccountController {
    constructor(private readonly _accountService: AccountService) {}

    @Get()
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
}
