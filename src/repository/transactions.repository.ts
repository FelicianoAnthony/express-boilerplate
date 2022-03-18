import { logger } from '../conf/logger';
// import * as axios from 'axios';
const axios = require('axios');
import { TransactionData } from '../data';

const getAll = () => {
    return TransactionData;
}

export {
    getAll
}