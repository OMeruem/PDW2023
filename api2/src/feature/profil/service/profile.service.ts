import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {Profile} from "../model/entity";
import {ProfileCreatePayload} from "../model/payload/profile-create.payload";
import {ProfileCreateException, ProfileListException, ProfileNotFoundException} from "../profile.exception";
import {Credential} from '../../../security';
import {ProfileUpdatePayload} from '../model/payload/profile-update-payload';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private readonly repository: Repository<Profile>
                ) {}
    async create(user:Credential, payload: ProfileCreatePayload): Promise<Profile> {
        try {
            const newProfile = Object.assign(new Profile(), Builder<Profile>()
                .lastName(payload.lastname)
                .firstName(payload.firstname)
                .description(payload.description)
                .status(payload.status)
                .profilePic(payload.profilePic)
                .mail(payload.mail)
                .credential_id(user.credential_id)
                .build());
            return await this.repository.save(newProfile);
        } catch (e) {
            throw new ProfileCreateException();
        }
    }

    async updateProfile(user:Credential, payload:ProfileUpdatePayload):Promise<Profile> {
        try {
            let data = await this.repository.findOneBy({credential_id: user.credential_id});
            data.lastName = payload.lastName;
            data.firstName= payload.firstName;
            data.description = payload.description;
            data.status = payload.status;
            data.profilePic = payload.profilePic;
            data.mail = payload.mail;
            return await this.repository.save(data);
        } catch (e) {
            throw new Error();
        }
    }
    async ProfileByCredential(user:Credential): Promise<Profile> {
        const result = await this.repository.findOneBy({credential_id:user.credential_id});
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

