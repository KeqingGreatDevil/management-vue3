import { createStore } from "vuex";
export default createStore({
    state:{
        isCollapse:true,
        currentMenu:null
    },
    mutations:{
        updateIsCollapse(state,patload){
            state.isCollapse=!state.isCollapse
        },
        selectMenu(state,val){
            val.name=='home' ?(state.currentMenu=null) :(state.currentMenu=val)
        }
    }
})