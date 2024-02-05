import {
    BeforeInsert,
    Column,
    Entity,
    JoinColumn, ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";

import {ulid} from "ulid";
import {Profile} from "./profile.entity";
import {Publication} from "./publication.entity";
import {Comment} from "./comment.entity";
import {BaseEntity} from '@common/model/entity/base.entity';


@Entity()
export class Like extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    idLike: string;

    @ManyToOne(() => Publication, {cascade: true, onDelete:"CASCADE"})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication_fk'})
    idPublication: string;


}