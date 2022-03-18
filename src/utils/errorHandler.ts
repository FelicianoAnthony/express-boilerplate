class ErrorHandler extends Error {
    status: number;
    message: string;
    isOperational: boolean;
    params: string;

    constructor(status = 500, message, isOperational, ...params) {
        super(...params);

        // Maintains proper stack trace for where error was thrown
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorHandler);
        }

        this.name = "ErrorHandler";
        this.status = status;
        this.message = message;
        this.isOperational = isOperational;
        this.params = params.join("\n");
    }
    
}

export default ErrorHandler;