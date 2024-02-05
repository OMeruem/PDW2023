import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Credential, Token} from './model';
import { TokenService } from './jwt';
import { SecurityService } from './service';
import { SecurityController } from './security.controller';
import {ConfigKey, configManager} from '@common/config';
import {JwtModule} from '@nestjs/jwt';
import {Profile} from '../feature/profil/model/entity';
import {ProfileService} from '../feature/profil/service/profile.service';

@Module({
    imports: [JwtModule.register({
        global: true,
        secret: configManager.getValue(ConfigKey.JWT_TOKEN_SECRET),
        signOptions: {expiresIn: configManager.getValue(ConfigKey.JWT_TOKEN_EXPIRE_IN)},
    }), TypeOrmModule.forFeature([Credential, Token, Profile])],
    exports: [SecurityService],
    providers: [SecurityService, TokenService,ProfileService],
    controllers: [SecurityController]
})
export class SecurityModule {
}
