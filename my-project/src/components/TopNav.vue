<template>
  <header>
    <section>
      <a href="/" class="i_logo">王遥的简历</a>
      <nav class="i_main">
        <div class="nav_line" :style="{width:nav_line.width + 'px', left:nav_line.left+'px'}" ref="nav_line" id="nav_line"></div>
        <a v-for="ls in navSingle" :ref = "ls.name" @mouseover="greet(ls.name)" :key="ls.name" :class="{on:ls.name === act}" class ="i_m_cld" href="#">{{ls.name}}</a>
        <div v-for="ls in navMut" :key="ls.name" :ref = "ls.name" @mouseover="greet(ls.name)" :class="{on:ls.name === act}" class="nav_sz_w i_m_cld">
          <a href="#" >{{ls.name}}</a>
          <br>
          <span class="nav_s_i">{{ls.year}}</span>
        </div>
      </nav>
      <!--用户登入状态 s-->
      <div class="u_f_i_login">
        <div class="u_f_i_lu">
          <a href="#" class="u_f_i_name">
            <img src="https://image.flaticon.com/teams/slug/freepik.jpg" alt="">
            <span class="i_uname">王遥</span>
          </a>
          <!--用户登录的列表 S-->
          <nav class="u_f_i_nav">
            <a v-for="ls in myLs" :key="ls.name"  href="#">{{ls.name}}</a>
            <div class="u_p_logout">
              <a href="javascript:void(0);" class="j_init_change">修改密码</a><br>
              <a href="javascript:void(0);" class="j_init_logout">退 出</a><br>
            </div>
          </nav>
          <!--用户登录的列表 e-->
        </div>
      </div>
      <!--用户登入状态 e-->
    </section>
    <!--用户登录后 S-->
  </header>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
      act: 'PC网站',
      navSingle: [
        {
          name: 'PC网站',
          href: '#'
        },
        {
          name: 'WAP',
          href: '#'
        },
        {
          name: '可视化',
          href: '#'
        }
      ],
      navMut: [
        {
          name: 'CANVAS',
          href: '#',
          year: 2015
        },
        {
          name: 'SVG',
          href: '#',
          year: 2014
        },
        {
          name: 'VUE',
          href: '#',
          year: 2016
        },
        {
          name: 'React',
          href: '#',
          year: 2016
        },
        {
          name: 'Hybrid',
          href: '#',
          year: 2014
        }
      ],
      myLs: [
        {
          name: '我的主页',
          href: '#'
        },
        {
          name: '我的提醒',
          href: '#'
        },
        {
          name: '创建项目',
          href: '#'
        }
      ],
      nav_line: {
        width: 100,
        left: 100
      }
    }
  },
  methods: {
    greet: function (p) {
      console.log(p)
      let wdh = this.$refs[p][0].clientWidth
      let lft = this.$refs[p][0].offsetLeft
      console.log('clientWidth' + this.$refs[p][0].clientWidth)
      console.log('offsetLeft' + this.$refs[p][0].offsetLeft)
      const navLine = this.$refs['nav_line']
      console.log(this.$refs['nav_line'])
      console.log(this.$refs.nav_line.offsetLeft)
      navLine.width = wdh
      navLine.left = lft
      this.nav_line.width = wdh
      this.nav_line.left = lft
      this.act = p
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/css/global.css";
  header{
    z-index:105;background: #231815;height: 60px;position: fixed;top: 0; width: 100%;
    a:hover{
      text-decoration: none;
    }
    section{width:1200px;margin:0 auto;height:60px;position:relative;
      .i_logo{
        background-size: 88px 40px;
        width: 108px;
        height: 40px;
        margin-top: 10px;
        float: left;
        font-size: 20px;
        color: darkslategrey;
      }
      .i_main{width:720px;margin:0 0 0 40px;float: left;position:relative; height: 60px; top:-6px;
        .nav_line{height:2px;background:#2fb056;width:52px;position:absolute;left:0;bottom:-6px;}
        a{color: #ccc;font-size: 16px;font-weight: 600;display:inline-block;padding:10px;line-height:40px;}
      }
    }
    .u_f_i_nav{-webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 50% 0;
      -ms-transform-origin: 50% 0;
      transform-origin: 50% 0;
      opacity:0;border:1px solid #ddd;position:absolute;top:60px;left:-18px;width:140px;background:#fff;text-align:center;line-height:2.5;padding:10px 0;
      -moz-box-shadow: 0px 0px 10px #ccc;
      -webkit-box-shadow: 0px 0px 10px #ccc;
      box-shadow: 0px 0px 10px #ccc;
      visibility:hidden;
      a{font-size:14px;position:relative;border-bottom: 1px solid #f2f2f2;line-height:2.5;color:#595857;display:inline-block;width:80%;padding:0;
        &.gen{color:#2fb056;}
        &:hover{color:#36A654;}
      }
      &:before,
      &:after{
        content: "";width: 0;margin:0 0 0 -8px; position:absolute; left:50%;top:-8px;display: inline-block; height: 0; border-style: solid;border-width: 0 8px 8px 8px;border-color:transparent transparent  #fff transparent;
      }
      &:before{
        top: -9px; margin:0 0 0 -9px;border-width: 0 9px 9px 9px;border-color:transparent transparent  #ddd transparent;
      }
    }
    .u_f_i_login .u_f_i_lu:hover .u_f_i_nav{
      visibility: visible;
      opacity: 1;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      -webkit-transition: all 0.2s cubic-bezier(0.3, 0.6, 0.7, 1.4);
      transition: all 0.2s cubic-bezier(0.3, 0.6, 0.7, 1.4);
    }
    .u_f_i_login{font-size: 16px;line-height:60px; height:60px; box-sizing: border-box;text-align: right;position: absolute; right: 0;
      img{width: 30px;
        height: 30px;
        border-radius: 30px;
        background: #dfdfdf;
        display: inline-block;
        border:1px solid #dcdcdc;
      }
      .u_f_i_name {color: #fff;display: inline-block;line-height:60px;height: 60px; position: relative;top: 0;
        img{display: inline-block;line-height:60px;position:relative;top:-25px;}
        .i_uname{
          overflow: hidden;
          white-space: nowrap;text-overflow: ellipsis;
          max-width: 80px;
          display: inline-block;
          font-size: 13px;line-height:60px;height:60px;position:relative;top:1px;left: 3px;}
      }
    }
    .i_main{
      a{padding:4px 15px 16px;
        &.on,
        &:hover{color: #3aaa47;}
      }
      .nav_s_i{cursor: pointer; font-size: 12px;color: #3aaa47;position: relative;top:-15px;
        right:0;
        text-align: center;
        width: 100%;
        display: inline-block;
      }
      .nav_line{transition: all 0.2s ease; -webkit-transition: all 0.2s ease; position: absolute;bottom: 0;left: 0;width: 78px;height: 0;border-bottom: 3px solid #3aaa47;}
      .nav_sz_w{display: inline-table;text-align: right;padding: 0 15px;
        a{padding: 0;}
        &:hover{
          cursor: pointer;
          a{color: #3aaa47; }
        }
        &.on{
          a{color: #3aaa47; }
        }
      }
    }
  }
</style>
