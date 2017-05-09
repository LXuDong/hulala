import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import find from '@/components/page/find'
import shoppingCar from '@/components/page/shoppingCar'
import mine from '@/components/page/mine' 
import detailed from '@/components/page/detailed'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
	  {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/detailed',
      name: 'detailed',
      component: detailed
    }
  ]
})
