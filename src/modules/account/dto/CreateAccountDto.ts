'use strict';

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
}
