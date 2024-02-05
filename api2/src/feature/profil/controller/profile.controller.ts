import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import { ProfileService } from '../service/profile.service';
import {Profile} from "../model/entity";
import {ProfileCreatePayload} from "../model/payload/profile-create.payload";
import {User} from '@common/config';
import {Credential} from '../../../security';
import {ProfileUpdatePayload} from '../model/payload/profile-update-payload';

@ApiBearerAuth('access-token')
@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
    constructor(private readonly service: ProfileService) {
    }
    create(@User() user: Credential, @Body() payload: ProfileCreatePayload): Promise<Profile> {
        return this.service.create(user, payload);
    }
    @Get('ProfileByCredential')
    detail(@User() user: Credential): Promise<Profile> {
        return this.service.ProfileByCredential(user);
    }
    @Get('list')
    getAll(): Promise<Profile[]> {
        return this.service.getAll();
    }

    @Put('profile-update')
    updateUser(@User() user :  Credential, @Body() payload: ProfileUpdatePayload): Promise<Profile> {
        return this.service.updateProfile(user, payload);
    }

}