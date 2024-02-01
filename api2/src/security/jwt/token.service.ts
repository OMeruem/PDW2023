import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {RefreshTokenPayload, Token} from '../model';
import {Repository} from 'typeorm';
import {JwtService} from '@nestjs/jwt';
import {Builder} from 'builder-pattern';
import {ConfigKey, configManager} from '@common/config';
import {TokenExpiredException, TokenGenerationException} from '../security.exception';
import {Credential} from '../model';

@Injectable()
export class TokenService {
    private readonly logger = new Logger(TokenService.name);
    constructor(@InjectRepository(Token) private readonly repository: Repository<Token>,
                @InjectRepository(Credential) private readonly credentialRepository:
                    Repository<Credential>,
                private jwtService: JwtService) {
    }

    async getTokens(credential: Credential): Promise<Token> {
        try {
            await this.repository.delete({credential});
            const payload = {sub: credential.credential_id};
            const token = await this.jwtService.signAsync(payload, {
                secret: configManager.getValue(ConfigKey.JWT_TOKEN_SECRET),
                expiresIn: configManager.getValue(ConfigKey.JWT_TOKEN_EXPIRE_IN)
            });
            const refreshToken = await this.jwtService.signAsync(payload, {
                secret: configManager.getValue(ConfigKey.JWT_REFRESH_TOKEN_SECRET),
                expiresIn: configManager.getValue(ConfigKey.JWT_REFRESH_TOKEN_EXPIRE_IN)
            });
            await this.repository.upsert(
                Builder<Token>()
                    .token(token)
                    .refreshToken(refreshToken)
                    .credential(credential)
                    .build(),
                ['credential']
            )
            return this.repository.findOneBy({token: token});
        } catch (e) {
            this.logger.error(e.message);
            throw new TokenGenerationException();
        }
    }

    async deleteFor(credential: Credential): Promise<void> {
        await this.repository.delete({credential})
    }

    async refresh(payload: RefreshTokenPayload): Promise<Token> {
        try {
            const id = this.jwtService.verify(payload.refresh, {secret:
                    configManager.getValue(ConfigKey.JWT_REFRESH_TOKEN_SECRET)}).sub;
            const credential = await this.credentialRepository.findOneBy({credential_id: id});
            return await this.getTokens(credential);
        } catch (e) {
            this.logger.error(e.message);
            throw new TokenExpiredException();
        }
    }

}