import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { AccountService } from '../modules/account/account.service';
import { GeneratorService } from '../shared/services/generator.service';

@Injectable()
export class SchedulerService {
    constructor(
        private readonly _accountService: AccountService,
        private readonly _generatorService: GeneratorService,
    ) {}

    @Cron(CronExpression.EVERY_10_MINUTES)
    createAccount() {
        void this._accountService.createAccount({
            firstName: 'khien ' + this._generatorService.uuid(),
            lastName: 'pham ' + this._generatorService.uuid(),
            email: 'pckhien ' + this._generatorService.uuid() + ' @gmail.com',
        });
    }
}
