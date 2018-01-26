<template>
  <div class="hello">
    <div id="svg" class="svg"></div>
    <div id="cnmap" class="cnmap"></div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Test from '../assets/scripts/Test'
import Pie from '../assets/scripts/charts/Pie'
import CnMap from '../assets/scripts/charts/chinaMap2'

export default {
  name: 'HelloWorld',
  mounted () {
    const self = this
    self.drawSvg()
    self.drawPie()
    self.drawMap()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      company: [
        {name: '广西', value: 1872},
        {name: '北京', value: 1684},
        {name: '浙江', value: 1536},
        {name: '广东', value: 1524},
        {name: '上海', value: 1173},
        {name: '江苏', value: 1118},
        {name: '山东', value: 625},
        {name: '云南', value: 612},
        {name: '湖北', value: 331},
        {name: '安徽', value: 284}
      ]
    }
  },
  methods: {
    drawSvg () {
      const test = new Test('.svg')
      test.render()
    },
    drawPie () {
      const data = [
        { name: 'Sarah', value: 2502 },
        { name: 'Emma', value: 2005 },
        { name: 'Laura', value: 1968 },
        { name: 'Chloé', value: 1863 }
      ]
      const pie = new Pie('.svg')
      pie.render(data)
    },
    drawMap () {
      console.log('wywy')
      let i = 0
      for (i < 99; i++;) {
        setTimeout(function () {
          console.log(i)
        })
      }
      const dataurl = '../static/data/china.topojson'
      const arrColor = ['#79ba5e', '#8dd16d', '#b2e690', '#d8f1a2', '#e7f7c5']
      const cnMap = new CnMap('.cnmap', this.company)
      cnMap.render('.cnmap', dataurl, arrColor)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
