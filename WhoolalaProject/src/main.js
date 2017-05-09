// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

Vue.use(VueResource)
Vue.use(Vuex)

Vue.use(VueLazyload, {
	error: 'static/images/error.png',
	loading: 'static/images/loading.gif',
	try:1
})

Vue.config.productionTip = false

var store = new Vuex.Store({
    state: {
        loadingShow:false,
        carList:[]
      },
    mutations: {
      getDatas (state,data) {
          state.loadingShow=data
      },
      addCarList (state,data){
        state.carList.push(data);
        window.localStorage["carList"]= JSON.stringify(state.carList);
      },
      setCarList (state,data){
        state.carList=data;
      },
      removeGood (state,data){
        state.carList.splice(data,1);
        window.localStorage["carList"]= JSON.stringify(state.carList);
      }
    },
    actions :{
      getCarList (context){
        var data = JSON.parse(window.localStorage["carList"]);
        if(data){
          context.commit("setCarList",data)
        }
      }
    }
})

Vue.http.interceptors.push((request, next)  =>{
  store.commit('getDatas',true)
  next((response) => {
      store.commit('getDatas',false)
      return response;
  });
});

 

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created (){
    this.$store.dispatch("getCarList")
  }
})
