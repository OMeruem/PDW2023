import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Publication} from "../model/entity";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    PublicationCreateException, PublicationListException, PublicationNotFoundException
} from "../profile.exception";
import {isNil} from "lodash";
import {PublicationCreatePayload} from "../model/payload/publication-create.payload";

@Injectable()
export class PublicationService {
    constructor(@InjectRepository(Publication) private readonly repository: Repository<Publication>) {}
    async create(payload: PublicationCreatePayload): Promise<Publication> {
        try {
            const newPublication = Object.assign(new Publication(), Builder<Publication>()
                .content(payload.content)
                .profile(payload.profile)
                .build());
            return await this.repository.save(newPublication);
        } catch (e) {
            throw new PublicationCreateException();
        }
    }
    async detail(id: string): Promise<Publication> {
        const result = await this.repository.findOneBy({idPublication: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new PublicationNotFoundException();
    }

    async getAll(): Promise<Publication[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new PublicationListException();
        }
    }
}
