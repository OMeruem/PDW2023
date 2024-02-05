import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional} from "class-validator";


export class ProfileUpdatePayload {
    @ApiProperty()
    idProfile: string;

    @ApiProperty()
    @IsOptional()
    lastName: string;

    @ApiProperty()
    @IsOptional()
    firstName: string;

    @ApiProperty()
    @IsOptional()
    description: string;


    @ApiProperty()
    @IsOptional()
    profilePic: string;

    @ApiProperty()
    @IsOptional()
    status: string;

    @ApiProperty()
    @IsOptional()
    mail: string;


}