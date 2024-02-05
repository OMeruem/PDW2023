import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Credential} from '../../../../security';

export class PublicationCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 200)
    content: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 20)
    typePublication: string;

    @ApiProperty()
    @IsOptional()
    user: Credential;

}