import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    OneToMany, OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {Profile, Publication} from '../../../feature/profil/model/entity';
import {Comment} from '../../../feature/profil/model/entity';
import {Exclude} from 'class-transformer';
@Entity()
export class Credential {
    @PrimaryGeneratedColumn("uuid")
    credential_id: string;
    @Column({nullable: false, unique: true})
    username: string;
    @Exclude({ toPlainOnly: true})
    @Column({nullable: true})
    password: string;
    @Column({nullable: false, unique: true})
    mail: string;
    @Column({nullable: true, unique: false})
    facebookHash: string;
    @Column({nullable: true, unique: false})
    googleHash: string;
    @Column({default:false})
    isAdmin:boolean;
    @Column({default: true})
    active: boolean;
    @CreateDateColumn()
    created: Date;
    @UpdateDateColumn()
    updated: Date;

    @OneToOne(() => Profile, {cascade: true, eager: false})
    @JoinColumn({referencedColumnName: 'idProfile', name: 'idProfile_fk'})
    profile: Profile;

    @OneToMany(
        ()=>Publication, (publication)=> publication.credential_id ,{eager:false})
    publications:Publication[];

    @OneToMany(
        ()=>Comment, (comment)=> comment.credential_id, {cascade:true,eager:false})
    comments:Comment[];
}
