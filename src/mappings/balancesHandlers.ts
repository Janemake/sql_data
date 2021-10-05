import {SubstrateEvent} from "@subql/types";
import {timestamp, eventId} from "./globalFunction";
import {Deposit,
        Endowed,
        Transfer,
        Unreserved,
        Reserved, 
        BalanceSet} from "../types/models";

import {Balance} from "@polkadot/types/interfaces";

export async function handleDeposit(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString()
    let amountBalance = (amount as Balance).toBigInt()

    const element = new Deposit(eventId(event));

    element.timestamp = timestamp(event.block)
    element.depositAccount = address
    element.depositAmount = amountBalance
   
    await element.save()
    logger.info('Deposit from' + address);
}

export async function handleEndowed(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString()
    let amountBalance = (amount as Balance).toBigInt()

    const element = new Endowed(eventId(event));

    element.timestamp = timestamp(event.block)
    element.accCreated = address
    element.endowedAmount = amountBalance
   
    await element.save()
    logger.info('Endowed from' + address);
}

export async function handleReserved(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString()
    let amountBalance = (amount as Balance).toBigInt()

    const element = new Reserved(eventId(event));

    element.timestamp = timestamp(event.block)
    element.reservefrom = address
    element.reserveAmount = amountBalance
   
    await element.save()
    logger.info('Reserved from' + address);
}

export async function handleUnreserved(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString()
    let amountBalance = (amount as Balance).toBigInt()

    const element = new Unreserved(eventId(event));

    element.timestamp = timestamp(event.block)
    element.unreservefrom = address
    element.unreserveAmount = amountBalance
   
    await element.save()
    logger.info('Unreserved from' + address);
}


export async function handleTransfer(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [from,to, amount]}} = event;

    let addressFrom = from.toString()
    let addressTo = to.toString()
    let amountBalance = (amount as Balance).toBigInt()

    const element = new Transfer(eventId(event));

    element.timestamp = timestamp(event.block)
    element.transferFrom = addressFrom
    element.transferTo = addressTo
    element.transferAmount = amountBalance
   
    await element.save()
    logger.info('Transfer from' + from);
}

export async function handleBalanceSet(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [from,free, lock]}} = event;

    let addressFrom = from.toString()
    let freeBalance = (free as Balance).toBigInt()
    let lockBalance = (lock as Balance).toBigInt()

    const element = new BalanceSet(eventId(event));

    element.timestamp = timestamp(event.block)
    element.accountSet = addressFrom
    element.freeAmount = freeBalance
    element.reservedAmount = lockBalance
   
    await element.save()
    logger.info('Balance set for' + from);
}
