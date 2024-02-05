import {BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {ulid} from "ulid";
import { Credential } from "../../../../security";
import {Publication} from './publication.entity';


@Entity()
export class Profile{
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    idProfile: string;

    @Column({length: 50, nullable: true})
    lastName: string;

    @Column({length: 50, nullable: true})
    firstName: string;

    @Column({length: 200, nullable: true})
    description: string;

    @Column({length: 50, nullable: true})
    profilePic: string;

    @Column({length: 50, nullable: true})
    mail: string;

    @Column({length: 50, nullable: true})
    status: string;

    @OneToOne(() => Credential)
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id_fk'})
    credential_id: string;

}