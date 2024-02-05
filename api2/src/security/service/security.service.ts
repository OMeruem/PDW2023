import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TokenService} from '../jwt/token.service';
import {isNil} from 'lodash';
import {
    CredentialDeleteException,
    SignupException,
    UserAlreadyExistException,
    UserNotFoundException
} from '../security.exception';
import {Credential, RefreshTokenPayload, SignInPayload, SignupPayload, Token} from '../model';
import {comparePassword, encryptPassword} from './utils';
import {Builder} from 'builder-pattern';
import {ProfileCreatePayload} from '../../feature/profil/model/payload/profile-create.payload';
import {ProfileService} from '../../feature/profil/service/profile.service';



@Injectable()
export class SecurityService {
    constructor(
        @InjectRepository(Credential)
        private readonly repository: Repository<Credential>,
        private readonly tokenService: TokenService,
        private readonly profileService: ProfileService
    ) {}

    async detail(id: string): Promise<Credential> {
        const result = await this.repository.findOneBy({credential_id: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new UserNotFoundException();
    }

    async signIn(payload: SignInPayload,isAdmin:boolean): Promise<Token | null> {
        let result = null;
        if (payload.socialLogin) {
            if (!isNil(payload.facebookHash) && payload.facebookHash.length > 0) {
                result = await this.repository.findOneBy({facebookHash: payload.facebookHash,
                    isAdmin:isAdmin});
            } else if (!isNil(payload.googleHash) && payload.googleHash.length > 0) {
                result = await this.repository.findOneBy({googleHash: payload.googleHash,
                    isAdmin:isAdmin});
            }
        } else {
            result = await this.repository.findOneBy({username: payload.username,
                isAdmin:isAdmin});
        }
        if (!isNil(result) && (payload.socialLogin || await comparePassword(payload.password,
            result.password))) {
            return this.tokenService.getTokens(result);
        }
        throw new UserNotFoundException();
    }

    async signup(payload: SignupPayload): Promise<Credential | null> {
        const result: Credential | null = await this.repository.findOneBy({username: payload.username});

        if (!isNil(result)) {
            throw new UserAlreadyExistException();
        }
        try {
            const encryptedPassword: string = await encryptPassword(payload.password);

            const user = await this.repository.save(
                Builder<Credential>()
                    .username(payload.username)
                    .password(encryptedPassword)
                    .mail(payload.mail)
                    .build()
            );

            // Automatically create a profile for the user
            const ProfilePayload: ProfileCreatePayload = {
                credential_id: user.credential_id,
                lastname: '',
                firstname: '',
                description: '',
                status: '',
                profilePic: '',
                mail: user.mail,
            };

            const profile = await this.profileService.create(user, ProfilePayload);

            return user;


        } catch (e) {
            throw new SignupException();
        }
    }



    async refresh(payload: RefreshTokenPayload): Promise<Token | null> {
        return this.tokenService.refresh(payload);
    }

    async delete(id): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.tokenService.deleteFor(detail);
            await this.repository.remove(detail);
        } catch (e) {
            throw new CredentialDeleteException();
        }
    }

}
