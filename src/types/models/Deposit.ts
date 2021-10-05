// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Deposit implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public depositAccount: string;

    public depositAmount?: bigint;

    public timestamp?: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Deposit entity without an ID");
        await store.set('Deposit', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Deposit entity without an ID");
        await store.remove('Deposit', id.toString());
    }

    static async get(id:string): Promise<Deposit | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Deposit entity without an ID");
        const record = await store.get('Deposit', id.toString());
        if (record){
            return Deposit.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Deposit(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
