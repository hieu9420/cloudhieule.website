import * as dotenv from 'dotenv';
dotenv.config();

const API_PATH = process.env.API_LINK;

const API_LOGIN = API_PATH + '/api/login';
const API_LOGOUT = API_PATH + '/api/logout';
const API_GET_MOTEL = API_PATH + '/api/motel/getmotel';
const API_GET_MOTEL_COST = API_PATH + '/api/motel/getmotelcost';

const API_LIST = {
    API_LOGIN,
    API_LOGOUT,
    API_GET_MOTEL,
    API_GET_MOTEL_COST,
    
}

export { API_LIST }