import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { AccountService } from '../modules/account/account.service';

@Injectable()
export class SchedulerService {
    constructor(private readonly _accountService: AccountService) {}

    @Cron(CronExpression.EVERY_5_SECONDS)
    createAccount() {
        void this._accountService.createAccount({
            firstName: 'khien',
            lastName: 'pham',
            email: 'pckhien@gmail.com',
        });
        // eslint-disable-next-line no-restricted-syntax
        console.log('Called when the current second is 45');
    }
}
