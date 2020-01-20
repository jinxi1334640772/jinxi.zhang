import axios from './index';
export const edsSearchList = params => {
    return axios.getJsonData('/api/Dictionary/SearchList', params);
};
