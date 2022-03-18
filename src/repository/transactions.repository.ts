import { logger } from '../conf/logger';
import { TransactionData } from '../data';
import { TrxEntry } from '../types';

const getAll = (): TrxEntry[] =>  {
    return TransactionData;
}

export {
    getAll
}