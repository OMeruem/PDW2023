import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";

import {Profile} from "../entity";
import {Publication} from "../entity";
import {Comment} from "../entity";

export class LikeCreatePayload {
    @ApiProperty()
    @IsOptional()
    profile: Profile;

    @ApiProperty()
    @IsOptional()
    publication: Publication;

    @ApiProperty()
    @IsOptional()
    comment: Comment;
}