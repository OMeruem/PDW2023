import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Profile} from "../entity";

export class PublicationCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 300)
    content: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    typePublication: string;

    @ApiProperty()
    @IsOptional()
    profile: Profile;

}