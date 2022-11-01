import { createStore } from "vuex"

export default createStore({
    state: {
        name: "",
        hits: []
    },
    mutations: {
        changeHits(state, payload) {
            state.hits[payload.index] = payload
        },
        deleteEvaluation(state){
            state.hits = []
        }        ,
        changeName(state, name){
            state.name = name
        }
    }
})