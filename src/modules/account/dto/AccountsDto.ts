import { ApiProperty } from '@nestjs/swagger';

export class AccountsDto {
    @ApiProperty({
        type: AccountsDto,
        isArray: true,
    })
    readonly data: AccountsDto[];
}
