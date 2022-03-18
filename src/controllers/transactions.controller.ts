import * as express from 'express';
import { TransactionsService } from '../services';
import { logger } from '../conf/logger';
import ErrorHandler from '../utils/errorHandler';

const getAll = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const data = TransactionsService.getAll();
        res.status(200).json(data);
    }
    catch(e) {
        logger.error(`an error occurred in getAll`);
        if ((e instanceof Error) && e.name === 'ErrorHandler') {
            next(e)
        }
        else {
            next(new ErrorHandler(e.status, e.message, false));
        }
    }
} 

export {
    getAll
}
