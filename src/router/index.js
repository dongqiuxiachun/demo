import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/demo'
import Pagination from '@/components/pagination'
import Operator from '@/components/operator'
import Add from '@/components/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/operator',
      name: 'operator',
      component: Operator
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
