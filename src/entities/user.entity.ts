import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid } from "uuid";
@Entity("Users")

export class User{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    isAdm:boolean;

    @Column()
    isActive:boolean;

    @Column()
    password:string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}