import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Comment, Profile} from "../model/entity";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {CommentCreatePayload} from "../model/payload/comment-create.payload";
import {CommentCreateException, CommentListException, CommentNotFoundException} from '../profile.exception';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private readonly repository: Repository<Comment>) {}
    async create(payload: CommentCreatePayload): Promise<Comment> {
        try {
            const newComment = Object.assign(new Comment(), Builder<Comment>()
                .content(payload.content)
                .profile(payload.profile)
                .publication(payload.publication)
                .build());
            return await this.repository.save(newComment);
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
    }}
