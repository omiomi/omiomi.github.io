/**
* @Author: wang.yao
* @Email: zhxzhs@gmail.com
* @Date: 2018-03-24
* @Last Modified time: 2018-03-24
* @Description:
*/
<template>
  <div class="anli-wrap">
    <div class="anli">
      <h2>典型案例</h2>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in anli" :key="item.name"><img :src="item.url" ></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .anli-wrap{
    width: 100%;
    height: 450px;
    background: #fff;
    box-sizing: border-box;
    .anli{
      position: relative;
      h2{
        font-size: 26px;
        font-weight: 200;
        position: absolute;
        top:30px;
        width: 100%;
        text-align: center;
      }
      width: 1280px;
      margin: 0 auto;
      height: 450px;
      .swiper-container{
        margin: 0 auto;
        height: 450px;
        .swiper-slide{
          width: 240px;
          height: 200px;
          box-shadow: 1px 1px 10px #888888;
          position: relative;
          background: #fff;
          top:160px;
          transform: scale(.98);
          box-reflect: below 0 -webkit-linear-gradient(top,rgba(250,250,250,0),rgba(250,250,250,.0) 30%,rgba(250,250,250,0.3));
          &.swiper-slide-next{
            transform: scale(1.5);
            z-index: 11;
          }
          img{
            height: auto;
            width: 260px;
            position: relative;
            top:30px;
          }
        }
      }
    }
  }
</style>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'swiper',

  data () {
    return {
      value2: 0,
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 60,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      anli: [
        {
          name: 'daping1',
          url: '../../../static/pic/cj1.jpg'
        },
        {
          name: 'daping2',
          url: '../../../static/pic/cj2.jpg'
        },
        {
          name: 'daping1',
          url: '../../../static/pic/dp1.jpg'
        },
        {
          name: 'daping1',
          url: '../../../static/pic/dp2.jpg'
        }
      ]
    }
  },

  props: {},

  components: {
    swiper,
    swiperSlide
  }
}
</script>
