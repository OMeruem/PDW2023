import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import {ulid} from "ulid";
import {Profile} from "./profile.entity";


@Entity()
export class Publication {
    @PrimaryGeneratedColumn()
    idPublication: string;

    @Column({length: 200, nullable: true})
    content: string;



    @ManyToOne(() => Profile, {cascade: false})
    @JoinColumn({referencedColumnName: 'idProfile', name: 'idProfile_fk'})
    profile: Profile;

}