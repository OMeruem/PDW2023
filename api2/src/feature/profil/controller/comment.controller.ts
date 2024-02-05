import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {CommentCreatePayload} from "../model/payload/comment-create.payload";
import {CommentService} from "../service/comment.service";
import {User} from '@common/config';
import { Credential } from "../../../security";
import {Comment, Publication} from '../model/entity';

@ApiBearerAuth('access-token')
@ApiTags('Comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly service: CommentService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: CommentCreatePayload): Promise<Comment> {
        return this.service.create(user, payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Comment> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Comment[]> {
        return this.service.getAll();
    }
    @Get('list/:idPublication')
    getCommentsById(@Param('idPublication') idPublication: string): Promise<Comment[]> {
        return this.service.getCommentsByPublicationId(idPublication);
    }

    @Get('comment-by-user')
    publicationDetail(@User() user :  Credential): Promise<Comment[]> {
        return this.service.commentByUser(user.credential_id);
    }

}