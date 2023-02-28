import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uiidV4} from "uuid"

@Entity( )
class Category{
    @PrimaryColumn()   
    id?: string;

    @Column()
    name: string;

    @Column()
    description:string;

    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(!this.id){
            this.id = uiidV4();
        }
    }
}

export {Category};