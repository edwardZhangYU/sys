import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Main from '@/components/Main'
import BaseForm from '@/components/BaseForm'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/baseForm',
          name:'BaseForm',
          component:BaseForm
        },
        {
          path: '/table',
          name:'Table',
          component:Table
        }
      ]
    },{
      path:'*',
      name:'NotFound',
      component:NotFound
    }
  ]
})
