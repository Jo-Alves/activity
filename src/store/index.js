import { createStore } from "vuex"

export default createStore({
    state: {
        hit: 0
    },
    mutations: {
        changeHits(state, payload){
            state.hit = payload
        }
    }
})