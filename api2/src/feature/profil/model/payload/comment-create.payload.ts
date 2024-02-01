import {IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Profile, Publication} from "../entity";


export class CommentCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    content: string;

    @ApiProperty()
    @IsOptional()
    profile: Profile;

    @ApiProperty()
    @IsOptional()
    publication: Publication;
}