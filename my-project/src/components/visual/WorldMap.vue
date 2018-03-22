<template>
  <div class="worldmap">
    <div id="wmap" class="wmap"></div>
  </div>
</template>

<script>
import CnMap from '@/assets/scripts/charts/worldMap'

export default {
  name: 'WorldMap',
  mounted () {
    const self = this
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
    drawMap () {
      console.log('wywy')
      let i = 0
      for (i < 99; i++;) {
        setTimeout(function () {
          console.log(i)
        })
      }
      const dataurl = '../static/data/world.topojson'
      const arrColor = ['#79ba5e', '#8dd16d', '#b2e690', '#d8f1a2', '#e7f7c5']
      const cnMap = new CnMap('.wmap', this.company)
      cnMap.render('.wmap', dataurl, arrColor, this.company)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .tooltip{
    font-size:.8rem;
    font-weight: 600;
    display: inline-block;
    height:auto;
    position:absolute;
    text-align:left;
    border:0;
    background:rgba(0,0,0,.3);
    padding: 5px;
    border-radius:5px;
    color: #fff;
  }
</style>
