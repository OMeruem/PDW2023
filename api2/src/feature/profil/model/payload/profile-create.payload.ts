import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";

import {Credential} from "../../../../security";

export class ProfileCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    nom: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    prenom: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 300)
    description: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    status: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    photoProfile: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    @Length(1, 34)
    mail: string;

    @ApiProperty()
    @IsOptional()
    credential: string;

}