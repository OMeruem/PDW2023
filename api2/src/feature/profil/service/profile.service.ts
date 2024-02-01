import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {Profile} from "../model/entity";
import {ProfileCreatePayload} from "../model/payload/profile-create.payload";
import {ProfileCreateException, ProfileListException, ProfileNotFoundException} from "../profile.exception";

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private readonly repository: Repository<Profile>) {}
    async create(payload: ProfileCreatePayload): Promise<Profile> {
        try {
            const newProfile = Object.assign(new Profile(), Builder<Profile>()
                .nom(payload.nom)
                .prenom(payload.prenom)
                .description(payload.description)
                .status(payload.status)
                .photoProfile(payload.photoProfile)
                .mail(payload.mail)
                .credential(payload.credential)
                .build());
            return await this.repository.save(newProfile);
        } catch (e) {
            throw new ProfileCreateException();
        }
    }
    async detail(id: string): Promise<Profile> {
        const result = await this.repository.findOneBy({idProfile: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new ProfileNotFoundException();
    }

    async getAll(): Promise<Profile[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new ProfileListException();
        }
    }

}

