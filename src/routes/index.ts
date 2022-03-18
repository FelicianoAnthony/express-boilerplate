import { Router } from 'express';
import TransactionsRouter from './transactions.route';


let routes = Router();

routes.use('/transactions', TransactionsRouter);
// routes.use('/users')
    // routes.post('/users/<id>/calcBalance')

export {
    routes
}