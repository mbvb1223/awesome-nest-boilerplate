import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Render,
} from '@nestjs/common';

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
    async edit(@Param('slug') slug): Promise<any> {
        // eslint-disable-next-line no-restricted-syntax
        console.log(slug);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const account = await this._accountService.findOne(slug);
        // return account.toDto();

        return { account: account.toDto() };
    }

    @Put('update')
    async update(
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
