import {BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";

import {ulid} from "ulid";
import {Profile} from "./profile.entity";
import {Publication} from "./publication.entity";
import {Comment} from "./comment.entity";


@Entity()
export class Like {
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    idLike: string;

    @OneToOne(() => Profile, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idProfile', name: 'idProfile_fk'})
    profile: Profile;

    @OneToOne(() => Publication, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication_fk'})
    publication: Publication;

    @OneToOne(() => Comment, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idComment', name: 'idComment_fk'})
    comment: Comment;

}