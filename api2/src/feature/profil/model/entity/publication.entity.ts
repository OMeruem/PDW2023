import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { Credential } from "../../../../security";
import {Comment} from './comment.entity';
import {BaseEntity} from '@common/model/entity/base.entity';



@Entity()
export class Publication extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    idPublication: string;

    @Column({length: 100, nullable: true})
    content: string;

    @Column({length: 20, nullable: true})
    typePublication: string;

    @ManyToOne(() => Credential, {eager:true,onDelete:"CASCADE"})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id'})
    credential_id: string

    @OneToMany(()=> Comment, (comment)=> comment.credential_id, {cascade:true,eager:false})
    comment:Comment[];






}