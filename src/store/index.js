import { createStore } from "vuex"

export default createStore({
    state: {
        hits: []
    },
    mutations: {
        changeHits(state, payload) {
            state.hits[payload.index] = payload
        }
    }
})