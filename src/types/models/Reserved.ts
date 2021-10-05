// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Reserved implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public reservefrom: string;

    public reserveAmount?: bigint;

    public timestamp: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Reserved entity without an ID");
        await store.set('Reserved', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Reserved entity without an ID");
        await store.remove('Reserved', id.toString());
    }

    static async get(id:string): Promise<Reserved | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Reserved entity without an ID");
        const record = await store.get('Reserved', id.toString());
        if (record){
            return Reserved.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Reserved(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
