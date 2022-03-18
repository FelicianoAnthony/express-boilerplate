import { NextFunction , Request, Response} from 'express';
import ErrorHandler from '../utils/errorHandler';
import { logger } from '../conf';
import { HttpStatusCode } from '../utils/httpCode';

const errorMiddleware = (error: ErrorHandler, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || HttpStatusCode.INTERNAL_SERVER;
    const message = error.message || "something went wrong";
    const isOperational = error.isOperational;
    const params = error.params;

    if (isOperational === false) {
        console.log("log and send email via winston");
        logger.error(`errorcode: ${status}, message ${message}, other info ${params} stack ${error.stack}`);
    }

    response.status(status).json({
        status,
        message
    })
}

export default errorMiddleware;