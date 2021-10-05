// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Endowed implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public accCreated: string;

    public endowedAmount?: bigint;

    public timestamp?: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Endowed entity without an ID");
        await store.set('Endowed', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Endowed entity without an ID");
        await store.remove('Endowed', id.toString());
    }

    static async get(id:string): Promise<Endowed | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Endowed entity without an ID");
        const record = await store.get('Endowed', id.toString());
        if (record){
            return Endowed.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Endowed(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
