import { v4 } from "uuid";
import {Column, Entity, PrimaryColumn, CreateDateColumn} from "typeorm";

@Entity("specifications")
class Specification {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }

}
export {Specification};