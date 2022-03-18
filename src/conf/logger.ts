import * as winston from 'winston';
import * as moment from 'moment';

const config = {
    levels: {
        emerg: 0,
        alert: 1,
        critical: 2,
        error: 3,
        warn: 4,
        notice: 5,
        info: 6,
        debug:7
    },
    colors: {
        emerg: 'bold red whiteBG',
        alert: 'bold red whiteBG',
        critical: 'bold red blackBG',
        error: 'bold red blackBG',
        warn: 'yellow',
        notice: 'cyan',
        info: 'green',
        debug: 'blue'
    }
}

const tsFormat = () => moment().format('YYYY--MM-DD hh:mm:ss').trim();

const logFormat = winston.format.printf((logObject) => {
    if (logObject.meta && logObject.meta instanceof Error) {
        return `${logObject.timestamp.slice(0,19).replace('T', ' ')} ${logObject.level}: ${logObject.message} : ${logObject.meta.stack}`;
    }
    else if(logObject.error && logObject.error.stack) {
        return `${logObject.timestamp.slice(0,19).replace('T', ' ')} ${logObject.level}: ${logObject.message} : ${logObject.error.stack}`;
    }
    else if (logObject.stack) {
        return `${logObject.timestamp.slice(0,19).replace('T', ' ')} ${logObject.level}: ${logObject.message} : ${logObject.stack}`;
    }

    return `${logObject.timestamp.slice(0,19).replace('T', ' ')} ${logObject.level}: ${logObject.message}`;
})

winston.addColors(config.colors);

const defaultFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    logFormat,
    winston.format.timestamp({ format: tsFormat})
)

const options = {
    console: {
        levels: config.levels,
        format: winston.format.combine(winston.format.colorize(), defaultFormat),
        handleExceptions: true,
        handleRejections: true,
        exitOnError: true
    }
}

export const logger = winston.createLogger({
    level: 'info',
    format: defaultFormat,
    transports: [
        new winston.transports.Console(options.console)
    ]
});


