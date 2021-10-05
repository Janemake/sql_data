// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Unreserved implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public unreservefrom: string;

    public unreserveAmount?: bigint;

    public timestamp: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Unreserved entity without an ID");
        await store.set('Unreserved', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Unreserved entity without an ID");
        await store.remove('Unreserved', id.toString());
    }

    static async get(id:string): Promise<Unreserved | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Unreserved entity without an ID");
        const record = await store.get('Unreserved', id.toString());
        if (record){
            return Unreserved.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Unreserved(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
