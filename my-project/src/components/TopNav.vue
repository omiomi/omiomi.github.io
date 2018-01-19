<template>
  <div class="nav-top">
    <div class="header-inner-9">
      <div class="logo-9">
        <a href="#" class="innotree-logo">
        </a>
      </div>
      <div class="nav-9">
        <ol>
          <li class="snl"><a href="#">首页</a></li>
          <li class="snl"><a href="#">因果资讯</a></li>
          <li class="snl"><a href="#">创投榜单</a></li>
          <li class="snl"><a href="#">摆谱</a></li>
          <li class="snl"><a href="#">值说</a></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .nav-top{
    width: 100%;
    height: 64px;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    z-index: 1002;
    position: relative;
    .header-inner-9{
      position: relative;
      margin: 0 auto;
      width: 1140px;
      height: 64px;
      .logo-9{
        img{
          width: 106px;
          height: auto;
          position: absolute;
          left: 0;
          top:12px;
        }
      }
    }
    .nav-9{
      width: 600px;
      height: 64px;
      position: absolute;
      left: 540px;
      top:0;
      ol{
        list-style: none;
        margin: 0;
        li{
          display: inline-block;
          line-height: 64px;
          position: relative;
          height: 64px;
          a{
            color: #000;
            font-size: 18px;
            display: inline-block;
            position: relative;
            padding: 0 12px;
            text-decoration: none;

          }
          &:hover a,
          &.on a{
            color: #19ae66;
          }
          &.on:after{
            content: "";
            height: 2px;
            width: 100%;
            display: inline-block;
            position: absolute;
            background: #19ae66;
            bottom: 0;
            left: 0;
          }
        }

      }
    }
  }

</style>
