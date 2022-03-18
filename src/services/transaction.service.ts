import ErrorHandler from '../utils/errorHandler';
import { TransactionsRepository } from '../repository'
import { logger } from '../conf/logger';
import { TrxEntry } from '../types';

const getAll = (): TrxEntry[] => {
    try {
        return TransactionsRepository.getAll();
    }
    catch(e) {
        logger.info('an error occurred in transaction.service.ts');
        if ((e instanceof Error) && e.name === 'ErrorHandler') {
            throw (e)
        }
        else {
            throw new ErrorHandler(e.status, e.message, false);
        }
    }
}

export {
    getAll
}