import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Comment, Like, Profile, Publication} from "./model/entity";
import {ProfileController} from "./controller/profile.controller";
import {PublicationController} from "./controller/publication.controller";

import {ProfileService} from "./service/profile.service";
import {PublicationService} from "./service/publication.service";
import {CommentService} from "./service/comment.service";
import {LikeService} from "./service/like.service";
import {CommentController} from './controller/comment.controller';
import {LikeController} from './controller/like.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, Publication, Comment, Like])],
  controllers: [ProfileController, PublicationController, CommentController, LikeController],
  providers: [ProfileService, PublicationService, CommentService, LikeService]
})
export class ProfileModule {}
