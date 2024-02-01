import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Comment} from "../model/entity";
import {CommentCreatePayload} from "../model/payload/comment-create.payload";
import {CommentService} from "../service/comment.service";

@ApiBearerAuth('access-token')
@ApiTags('Comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly service: CommentService) {
    }
    @Post('create')
    create(@Body() payload: CommentCreatePayload): Promise<Comment> {
        return this.service.create(payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Comment> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Comment[]> {
        return this.service.getAll();
    }

}