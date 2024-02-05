import {IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class CommentCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 100)
    content: string;

    @ApiProperty()
    @IsOptional()
    credential_id: string;

    @ApiProperty()
    @IsOptional()
    idPublication: string;
}