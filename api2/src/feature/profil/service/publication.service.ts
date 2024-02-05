import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Publication} from "../model/entity";
import {FindManyOptions, Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    PublicationCreateException,
    PublicationDeleteException,
    PublicationListByCredentialException,
    PublicationListException,
    PublicationNotFoundException
} from "../profile.exception";
import {isNil} from "lodash";
import {PublicationCreatePayload} from "../model/payload/publication-create.payload";
import { Credential } from "../../../security";


@Injectable()
export class PublicationService {
    constructor(@InjectRepository(Publication) private readonly repository: Repository<Publication>) {}
    async create(user: Credential, payload: PublicationCreatePayload): Promise<Publication> {
        try {
            return await this.repository.save(Builder<Publication>()
                .content(payload.content)
                .typePublication(payload.typePublication)
                .credential_id(user.credential_id)
                .build());
        } catch (e) {
            throw new PublicationCreateException();
        }
    }

    async publicationByUser(credential_id:string): Promise<Publication[]> {
        try {
            return await this.repository.find({
                where: { credential_id: credential_id }
            });
        } catch (e) {
            throw new PublicationListByCredentialException();
        }

    }


    async getPublication(credential_id: string): Promise<Publication> {
        const result = await this.repository.findOneBy({idPublication: credential_id});
        if (!(isNil(result))) {
            return result;
        }
        throw new PublicationNotFoundException();
    }

    async getAllPublications(): Promise<Publication[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new PublicationListException();
        }
    }


    async delete(credential_id: string): Promise<void> {
        try {
            const data = await this.getPublication(credential_id);
            await this.repository.remove(data);
        } catch (e) {
            throw new PublicationDeleteException();
        }
    }
}
