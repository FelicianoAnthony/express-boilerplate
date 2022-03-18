import * as express from 'express';
import { TransactionsController } from '../controllers';
import { AuthMiddleware } from '../middleware';

let TransactionsRouter = express.Router();

TransactionsRouter.get('/', [AuthMiddleware.isAuthenticated], TransactionsController.getAll);
// transactionsRouter.post('/', [AuthMiddleware.isAuthenticated], TransactionsController.postTransaction);


export default TransactionsRouter;