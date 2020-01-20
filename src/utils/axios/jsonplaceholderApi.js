import axios from './index';
export const getUser = params => {
    return axios.getJsonDataJsonplaceholder('/users', params);
};
