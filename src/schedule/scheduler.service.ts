import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { AccountService } from '../modules/account/account.service';
import { GeneratorService } from '../shared/services/generator.service';

@Injectable()
export class SchedulerService {
    constructor(
        public readonly accountService: AccountService,
        public readonly generatorService: GeneratorService,
    ) {}

    @Cron(CronExpression.EVERY_10_MINUTES)
    createAccount() {
        void this.accountService.createAccount({
            firstName: 'Khien ' + this.generatorService.uuid(),
            lastName: 'Pham ' + this.generatorService.uuid(),
            email: 'pckhien_' + this.generatorService.uuid() + '@gmail.com',
        });
    }
}
