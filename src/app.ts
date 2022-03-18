import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { logger } from './conf';
import { routes } from './routes';
import errorMiddleware from './middleware/error.middleware';

dotenv.config({path: `${process.cwd()}/.env`});
const port = parseInt(process.env.LISTEN_PORT);
const address = process.env.LISTEN_ADDRESS;

const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({extended: false}));

app.use('/api', routes);

app.use(errorMiddleware);

app.listen(port, address, () => {
    logger.info(`server running on ${address}:${port}| NODE_ENV = ${process.env.NODE_ENV}`)
});