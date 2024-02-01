import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Like} from "../model/entity";
import {LikeCreatePayload} from "../model/payload/like-create.payload";
import {LikeService} from "../service/like.service";

@ApiBearerAuth('access-token')
@ApiTags('Like')
@Controller('like')
export class LikeController {
    constructor(private readonly service: LikeService) {
    }
    @Post('create')
    create(@Body() payload: LikeCreatePayload): Promise<Like> {
        return this.service.create(payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Like> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Like[]> {
        return this.service.getAll();
    }

}