import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
   agelocation:{
     age:'',
     location:''
   },
    id:''
  },
  mutations:{
    insert(state,payload){
      return state.agelocation = payload;
    },
    insertid(state,payload){
      return state.id = payload;
    }
  },
  actions:{
    insert(context,payload){
      context.commit('insert',payload);
    },
    insertid(context,payload){
      context.commit('insertid',payload);
    }
  }
});

export default store;
