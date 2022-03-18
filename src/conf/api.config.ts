import * as dotenv from 'dotenv';
dotenv.config({path: `${process.cwd()}/.env`})

const env = process.env.NODE_ENV;

const apiConfig = {
    dev: {
        BASE_URL: '',
        AUTH_KEY: '',
        ENDPOINT: ''
    },
    qa: {
        BASE_URL: '',
        AUTH_KEY: '',
        ENDPOINT: ''
    },
    prod: {
        BASE_URL: '',
        AUTH_KEY: '',
        ENDPOINT: ''
    }
}

export const config = apiConfig[env]