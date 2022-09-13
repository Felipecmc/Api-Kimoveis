import {Entity,Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from "typeorm";
import {v4 as uuid } from "uuid";
import {Address} from "./addresses.entity"
import {Category} from "./category.entity"
@Entity("properties")

export class Property{
    @PrimaryColumn("uuid")
    readonly id:string

    @Column({default: false})
    sold:boolean;

    @Column()
    value:number;

    @Column()
    size:number;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    @OneToOne(() => Address, {eager: true})
    @JoinColumn()
    address:Address;

    @Column()
    categoryId:string;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}