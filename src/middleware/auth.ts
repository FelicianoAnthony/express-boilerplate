import * as express from 'express';
import { logger } from '../conf/logger';

const isAuthenticated = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.info(`this is the function to check authentication before API call executes`);
    next()
}

export {
    isAuthenticated
}