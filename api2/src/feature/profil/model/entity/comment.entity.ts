import {BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {ulid} from "ulid";
import {Profile} from "./profile.entity";
import {Publication} from "./publication.entity";


@Entity()
export class Comment  {
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    idComment: string;

    @Column({length: 50, nullable: true})
    content: string;

    @OneToOne(() => Profile, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idProfile', name: 'idProfile_fk'})
    profile: Profile;

    @OneToOne(() => Publication, {cascade: false})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication_fk'})
    publication: Publication;

}