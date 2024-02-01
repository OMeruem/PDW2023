import {BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {ulid} from "ulid";
import { Credential } from "../../../../security";
import {Publication} from './publication.entity';


@Entity()
export class Profile{
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    idProfile: string;

    @Column({length: 50, nullable: true})
    nom: string;

    @Column({length: 50, nullable: true})
    prenom: string;

    @Column({length: 200, nullable: true})
    description: string;

    @Column({length: 50, nullable: true})
    status: string;

    @Column({length: 50, nullable: true})
    photoProfile: string;

    @Column({length: 50, nullable: true})
    mail: string;

    @OneToOne(() => Credential)
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id_fk'})
    credential: string;

    @OneToMany(()=>Publication, ()=> Publication,{cascade:true})
    publication:Publication[];

}