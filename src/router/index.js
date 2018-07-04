import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Add from '../components/Add.vue'
import Collect from '../components/Collect.vue'
import Detail from '../components/Detail.vue'
import Home from '../components/Home.vue'
import List from '../components/List.vue'


export default new Router({
  routes: [
    {
    	path: '/',redirect: '/home',meta: {keepActive: true} // 是否需要缓存
    },
  	{path: '/home',component: Home},
  	{path: '/add',component: Add},
  	{path: '/collect',component: Collect},
  	{path: '/detail/:bid',component: Detail,name:'detail'},
  	{path: '/list',component: List}
  ]
})