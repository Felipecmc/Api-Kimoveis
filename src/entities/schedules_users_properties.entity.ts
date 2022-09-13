import {Entity, Column, PrimaryColumn, OneToOne, JoinColumn} from "typeorm";
import {v4 as uuid } from "uuid";

import {User} from "./user.entity"

@Entity("schedules_users_properties")
export class Schedule{
    @PrimaryColumn("uuid")
    id:string;

    @Column()
    date: string;

    @Column()
    hour: string;

    @OneToOne(() => User, {})
    @JoinColumn()
    user: string;

    
    @Column()
    propertyId: string;

    
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

