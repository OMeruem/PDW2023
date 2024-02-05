import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {BaseEntity} from '@common/model/entity/base.entity';
import {Publication} from "./publication.entity";
import { Credential } from "../../../../security";


@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idComment: string;

    @Column({length: 50, nullable: true})
    content: string;

    @ManyToOne(() => Publication, {cascade: true, eager: true, onDelete:"CASCADE"})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication'})
    idPublication: string;

    @ManyToOne(() => Credential, (credential) => credential.comments, {eager:false})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id'})
    credential_id: string

}