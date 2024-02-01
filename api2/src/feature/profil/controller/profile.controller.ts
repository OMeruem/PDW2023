import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import { ProfileService } from '../service/profile.service';
import {Profile} from "../model/entity";
import {ProfileCreatePayload} from "../model/payload/profile-create.payload";

@ApiBearerAuth('access-token')
@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
    constructor(private readonly service: ProfileService) {
    }
    @Post('create')
    create(@Body() payload: ProfileCreatePayload): Promise<Profile> {
        return this.service.create(payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Profile> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Profile[]> {
        return this.service.getAll();
    }

}