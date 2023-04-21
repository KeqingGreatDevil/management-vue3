import { createStore } from "vuex";
export default createStore({
    state:{
        isCollapse:true
    },
    mutations:{
        updateIsCollapse(state,patload){
            state.isCollapse=!state.isCollapse
        }
    }
})