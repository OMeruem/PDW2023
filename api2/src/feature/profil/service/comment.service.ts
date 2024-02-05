import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {CommentCreatePayload} from "../model/payload/comment-create.payload";
import {
    CommentCreateException,
    CommentListException,
    CommentNotFoundException,
    PublicationListByCredentialException
} from '../profile.exception';
import { Credential } from "../../../security";
import {Comment, Publication} from '../model/entity';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private readonly repository: Repository<Comment>) {}
    async create(user: Credential, payload: CommentCreatePayload): Promise<Comment> {
        try {
            return await this.repository.save(Builder<Comment>()
                .content(payload.content)
                .credential_id(user.credential_id)
                .idPublication(payload.idPublication)
                .build());
        } catch (e) {
            throw new CommentCreateException();
        }
    }
    async detail(id: string): Promise<Comment> {
        const result = await this.repository.findOneBy({idComment: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new CommentNotFoundException();
    }

    async getAll(): Promise<Comment[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new CommentListException();
        }
    }

    async getCommentsByPublicationId(idPublication: string): Promise<Comment[]> {
        try {
            return await this.repository.find({ where: { idPublication } });
        } catch (e) {
            throw new CommentListException();
        }
    }

    async commentByUser(credential_id:string): Promise<Comment[]> {
        try {
            return await this.repository.find({
                where: {credential_id: credential_id}
            });
        } catch (e) {
            throw new PublicationListByCredentialException();
        }
    }
}


