import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChinaMap from '@/components/visual/ChinaMap'
import WorldMap from '@/components/visual/WorldMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChinaMap',
      component: ChinaMap
    },
    {
      path: '/',
      name: 'WorldMap',
      component: WorldMap
    },
    {
      path: '/china',
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
