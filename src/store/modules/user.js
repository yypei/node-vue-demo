const state={
    count:4,
    user_id:9999999,
};
const getters={

};
const actions={
    increment({commit,state}){
        commit('increment');
    }
};
const mutations={
    increment(state){
        console.log(state.count);
        state.count++;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}