const getters = {
    companyAlias(state) {
        return `我的公司${state.company}`;
    },
    firstdata(state) {
        return state.items.filter(item => {
            return item.name == '张进喜' || item.name == '王天云';
        });
    },
    messageGetter(state) {
        return state.message + '你很美';
    },
};
export default getters;
