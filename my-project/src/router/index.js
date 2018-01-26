import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChinaMap from '@/components/visual/ChinaMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChinaMap',
      component: ChinaMap
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
