import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";

import {Profile} from "../entity";
import {Publication} from "../entity";
import {Comment} from "../entity";
import {BaseEntity} from '@common/model/entity/base.entity';

export class LikeCreatePayload extends BaseEntity{
    @ApiProperty()
    @IsOptional()
    credential_id: string;

    @ApiProperty()
    @IsOptional()
    idPublication: string;
}